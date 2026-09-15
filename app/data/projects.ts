export type Project = {
  slug: string;
  title: string;
  /** 1–2 lines, shown on the card. */
  shortDescription: string;
  /** Full write-up, shown on the project page. */
  description: string;
  /** Full stack, shown on the project page. */
  technologies: string[];
  /** The 3–4 highlighted on the card. Falls back to the first 3 technologies. */
  featuredTech?: string[];
  /** Hard numbers worth surfacing on the card, not buried in prose. */
  metrics?: string[];
  github?: string;
  website?: string;
  /** Source is closed — the UI shows a lock instead of a repo link. */
  privateRepo?: boolean;
  /* Optional — the project page renders these only when present. */
  year?: string;
  role?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  /** Engineering problems worth explaining, each with a heading. */
  challenges?: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "aquasense",
    title: "AquaSense",
    shortDescription:
      "Multi-tenant platform that turns raw PLC/SCADA tags from water treatment plants into alerts, compliance reports and chemical inventory.",
    description:
      "A B2B monitoring platform for water treatment plant operators. AquaSense ingests PLC and SCADA tags in near real time and turns them into a process dashboard, actionable alerts, predictive maintenance with OEE, exportable regulatory compliance reports, and an auditable chemical inventory.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Table Partitioning",
      "pg_cron",
      "SWR",
      "Recharts",
      "React PDF",
      "Resend",
      "NestJS",
      "Modbus / OPC UA",
      "Claude Code",
      "Codex",
    ],
    featuredTech: ["Next.js", "TypeScript", "PostgreSQL"],
    metrics: ["~430 inserts/sec", "100 plants", "870 GB → 30 GB"],
    privateRepo: true,
    year: "2026 – Present",
    role: "Co-Founder & CTO",
    overview:
      "Each organization owns plants, lines, processes and monitoring points. Field gateways publish their PLC and SCADA tags, and AquaSense normalizes them against a metric catalog with thresholds configurable per point. On that foundation it delivers four surfaces: a plant dashboard showing status per process and per point with trend history, predictive maintenance and OEE per asset, compliance reports exportable to PDF, and a chemical inventory with an auditable ledger and reorder forecasting. Operators stop reading raw tags and start seeing regulatory status, actionable alerts and chemical traceability in one place.",
    problem:
      "PLC and SCADA data arrives as raw key/value pairs per gateway — no unit, no scale, no meaning — and nothing in it answers the question operators actually need answered: does this reading meet regulation? Volume is the real constraint: the design targets roughly 259 tags per plant every minute, about 430 inserts per second at 100 plants, which no monolithic table survives. Meanwhile chemical consumption is typically tracked outside the system entirely, with no traceability and no warning before a stockout. And as a multi-tenant product, none of one organization's data may ever leak into another's.",
    solution:
      "A single application where the same sensor reading feeds the dashboard, the alerts, the maintenance status, the compliance percentage and the chemical consumption. Next.js talks directly to Postgres with Row Level Security as the security boundary rather than a pass-through backend, while every sensitive write goes through SECURITY DEFINER RPCs that check permissions explicitly instead of relying on INSERT/UPDATE policies. Sensor ingestion runs as a separate NestJS service, and the time-series itself is range-partitioned with hierarchical rollups and automatic retention driven by pg_cron.",
    keyFeatures: [
      "Plant dashboard with a process map showing aggregate status, plus per-point detail with 24-hour trend charts polled every 20 seconds.",
      "Thresholds configurable per monitoring point and metric across six bands, with retroactive reclassification of already-stored readings.",
      "Predictive maintenance and OEE — asset status tracking with availability, performance and quality metrics.",
      "Compliance reporting mapped to Mexican standards (NOM-127-SSA1, NOM-001-SEMARNAT) with compliance percentage and PDF export.",
      "Chemical inventory: append-only movement ledger, FIFO/FEFO lot tracking, location transfers, physical counts with approval and photo evidence, purchase orders and reorder forecasting.",
      "Multi-tenant RBAC with organizations, roles and invitation tokens, plus per-organization module entitlements.",
    ],
    challenges: [
      {
        title: "Scaling the time-series to 430 inserts per second",
        body:
          "The readings table started monolithic and could not hold the target write rate. It was range-partitioned by timestamp with a composite primary key, and values moved from numeric to double precision — numeric costs roughly three times the storage. Hierarchical hourly, daily and monthly rollups sit on top, and two design decisions there matter: higher-level averages are recomputed as sum(sums)/sum(counts) rather than averaging averages, and out-of-range counts are stored explicitly so a healthy-looking average can never hide a regulatory violation in a compliance report. The rollup functions use delete-then-insert over a reprocessing window, making them idempotent and tolerant of late-arriving data. A per-tag deadband means history is only written when a value actually moves, cutting the worst-case footprint from roughly 870 GB to 30 GB.",
      },
      {
        title: "Getting triggers off the hot insert path",
        body:
          "Alerts were originally generated by an AFTER INSERT row-level trigger that ran SELECT ... FOR UPDATE against the alerts table, which serialized every concurrent sensor insert. It was rewritten as an idempotent set-based function that evaluates current state once per minute via pg_cron — opening, resolving and escalating alerts, one open alert per plant, metric and point. Both triggers were then dropped, leaving the readings table with zero triggers on the write path.",
      },
      {
        title: "A cross-tenant leak that partitioning quietly introduced",
        body:
          "Partitioning the readings table opened a hole: the child partitions and rollup tables landed in the public schema without RLS, so an authenticated user could bypass the parent's policy by querying a partition like readings_2026_06 directly. The fix enabled RLS with its own policy on the rollups, and enabled RLS without any policy on each partition — access through the parent still works because Postgres applies the policy of the table named in the query, while direct access becomes deny-all. Future partitions inherit this automatically. Execute permissions were revoked from PUBLIC on cron functions, search_path was pinned, and the org-membership helper moved to a private schema so PostgREST stops exposing it. The generalizable lesson is the valuable part: enabling RLS on a partitioned parent does not protect its children.",
      },
      {
        title: "An append-only ledger with balances as cache",
        body:
          "Inventory movements are the single source of truth and are append-only; balances are explicitly a cache updated by the same RPC in the same commit. No table in the module carries INSERT, UPDATE or DELETE policies at all — every mutation goes through a SECURITY DEFINER RPC that validates role permissions before writing. Correcting a mistake never deletes a row; it records a reversal movement. On top of that sits a real operational taxonomy (consumption, spillage, evaporation, measurement variance, calibration, lab testing), FIFO/FEFO lots, two-phase transfers, and physical counts gated behind approval with attached evidence.",
      },
      {
        title: "Forecasting derived, never persisted",
        body:
          "Reorder forecasting computes average daily consumption, trend, reorder point, days of stock remaining, projected stockout date and recommended purchase quantity directly from the ledger, current balance and reorder rules — deliberately without materializing a second source of truth that could drift. It converts recommendations into the supplier's purchase units using conversion factors and minimum order quantities, and returns a confidence level based on how much history actually backs the number.",
      },
      {
        title: "Modeling a domain with heterogeneous instrumentation",
        body:
          "The chain runs gateways to data sources (PLC or SCADA, with online/offline heartbeat) to tag mappings, where each tag translates a raw source key into a catalog metric with scale, offset, data type, its own deadband and its six thresholds. The model covers Modbus TCP, Modbus RTU, OPC UA, OPC DA and EtherNet/IP. That indirection is what lets one UI serve plants with completely different instrumentation.",
      },
      {
        title: "Why API routes return 401 instead of redirecting",
        body:
          "The auth middleware answers unauthenticated /api requests with a JSON 401 rather than a redirect to the login page. The reason is that fetch follows redirects transparently: a 307 would resolve into the login page's HTML delivered with status 200, and the client would read a failed mutation as a successful one.",
      },
    ],
  },
  {
    slug: "coachdiiaz",
    title: "CoachDiiaz Platform",
    shortDescription:
      "Role-based platform that replaces a coaching company's Notion, Sheets and Shopify stack with automated nutrition, training and payments.",
    description:
      "An internal platform for a training and nutrition coaching business, built to replace an ecosystem stitched together from Notion, Google Sheets, Shopify and Telegram. It unifies clients, coaches, payments, commissions, training programs, nutrition and weekly follow-up into a single role-aware portal.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "pg_cron",
      "Supabase Vault",
      "Shopify API",
      "Appstle Subscriptions",
      "Telegram Bot API",
      "Recharts",
      "ExcelJS",
      "Vitest",
      "Claude Code",
      "Codex",
    ],
    featuredTech: ["Next.js", "TypeScript", "Supabase"],
    metrics: ["300+ clients", "97 tables", "534 tests"],
    privateRepo: true,
    year: "2026",
    role: "Independent Full-Stack Developer",
    overview:
      "A Next.js and Supabase application in production use by 300+ clients, roughly 10 coaches and 5 administrative users, split into an admin portal and a client portal, with seven roles defined as a Postgres enum and enforced twice over — once by server-side guards and again by Row Level Security in the database. The admin side covers leads, clients, coaches, payments, commissions, nutrition check-ins, training programs, KPIs and reporting; the client side covers their program, nutrition, daily logging, physical progress, goals and payments. Calorie and macro targets, effective training volume, commissions, coach response SLAs and payment reconciliation all became automatic and auditable.",
    problem:
      "Every process ran on a different manual tool. Client data lived unnormalized in Notion, training programs in Google Sheets with no automatic calculations, and payments required opening Shopify by hand to change dates. Commissions were tracked manually across two separate sheets, Telegram conversations had no SLA measurement or traceability, leads were filtered by hand in a spreadsheet, and weekly follow-up was organized as folders named after days of the week.",
    solution:
      "A single permissioned portal where each manual process became a module, backed by an architecture that pushes business logic and security into the database: 97 tables across 137+ versioned migrations, with RPC functions, triggers, constraints and RLS policies doing the enforcing. External webhooks land in a three-layer model — raw event, normalized record, BI — while the critical formulas for TDEE, macros and effective volume live in a pure TypeScript domain layer covered by 534 automated tests, including fixtures extracted from the original spreadsheet that prove parity with the sheet it replaced.",
    keyFeatures: [
      "Versioned nutrition engine: BMR/TDEE from daily activity factors, weekly caloric and protein progression, plan wizard, and a weekly decision flow (advance / hold / adjust phase).",
      "Immutable nutrition protocols behind a state machine (draft → review → approved → published → deprecated), published by an RPC that runs an 11-point checklist inside a single transaction.",
      "Effective volume calculator: a category-to-muscle matrix with 0.25/0.5/1 coefficients that converts per-exercise sets into effective sets per muscle, snapshotted per program.",
      "Shopify payment ingestion with HMAC-SHA256 verification, idempotent raw-event storage, and commissions computed automatically by database trigger.",
      "Multi-bot Telegram integration — one bot per coach, tokens held in Supabase Vault — with automatic response-SLA calculation.",
      "Scheduled automation via pg_cron: client status transitions, measurement reminders, weekly KPIs, and no-response alerts that skip public holidays.",
    ],
    challenges: [
      {
        title: "Reverse-engineering a spreadsheet into a tested engine",
        body:
          "The nutrition engine reimplements a real 1.1 MB Excel workbook that the business ran on. Porting it surfaced genuine bugs in the original: the effective-week index was computed differently for calories than for protein, so the two drifted apart — the correct rule (only prior decisions count) now applies to both. The sheet also reported a ±0 adjustment when no data existed at all, because it divided by MAX(COUNTA(...),1); absence is now null rather than a misleading zero. TDEE had been a blank manual cell, so a canonical rule was defined and documented. Parity tests run against fixtures extracted directly from the workbook.",
      },
      {
        title: "Immutability and version governance enforced in the database",
        body:
          "Content is editable only while in draft; sending it to review freezes it, and published versions cannot be walked back — changing a formula, factor or question forces a new version. Check-in answers freeze the question text and label at the time of answering, so a future edit can never silently rewrite historical records. Source manuals are snapshotted with SHA-256 to detect a silent redeploy upstream. All of it is covered by migrations plus SQL smoke tests.",
      },
      {
        title: "Shipping a version without activating anyone",
        body:
          "Rollout is governed by two independent switches: publishing a protocol enables plan creation, while a separate feature flag controls whether real clients answer the versioned check-ins. The cutoff is enforced inside the database function that saves a check-in rather than in the UI, so turning the flag off genuinely stops submissions instead of merely hiding the form.",
      },
      {
        title: "Idempotent payment ingestion with constant-time verification",
        body:
          "Shopify webhooks are verified against the raw request body without re-serializing it, using a timing-safe comparison guarded by a length check. Events are stored raw and deduplicated by webhook ID before being normalized into payments and linked to clients and coaches. A missing secret returns 503 rather than 500, so Shopify retries the delivery once configuration exists instead of dropping it.",
      },
      {
        title: "Multi-tenant bots with no secrets in the environment",
        body:
          "Each coach runs their own Telegram bot, with tokens stored in Supabase Vault and readable only through a SECURITY DEFINER function restricted to the service role — never through environment variables. Each bot gets its own webhook endpoint validated by a per-coach secret token. Response SLA is derived from that ingest: for every streak of unanswered client messages, the time until the coach's first reply.",
      },
      {
        title: "Sandboxing untrusted third-party HTML",
        body:
          "Reading packages are served from a private bucket through a route handler that builds a strict CSP — sandbox with allow-scripts but deliberately without allow-same-origin, plus default-src, object-src, base-uri and form-action all locked to 'none'. The origin used to build that policy comes from the URL Next resolves, explicitly not from the Host or X-Forwarded-Host headers, so a spoofed header cannot promote itself into an allowed source.",
      },
    ],
  },
  {
    slug: "bicitec",
    title: "BiciTec",
    shortDescription:
      "IoT platform for real-time monitoring and management of campus bicycle systems.",
    description:
      "BiciTec is an IoT-powered platform that manages the institutional bicycle service at Tecnológico de Monterrey Campus Monterrey, through user authentication, sensor-based tracking, and real-time monitoring of availability, speed, and usage patterns. It improves control, reduces misuse, and provides actionable data for operational decisions.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MySQL",
      "Redis",
      "JWT",
      "Railway",
    ],
    featuredTech: ["Next.js", "Node.js", "MySQL"],
    year: "2025",
    role: "Solo Project — Engineering Competition",
    overview:
      "An end-to-end IoT bicycle-sharing platform built solo for an engineering competition. Student and administrator dashboards run on Next.js and React against a Node.js and Express REST API covering users, bicycle trips, stations, speed monitoring and IoT communication. The data sits in MySQL, Redis handles session management and token caching, access control is JWT-based, and the whole platform is deployed on Railway.",
    github: "https://github.com/Gugoraaa/BiciTec?tab=readme-ov-file",
  },
  {
    slug: "fittrack",
    title: "FitTrack",
    shortDescription:
      "Modular frontend scaffold for building scalable fitness tracking applications.",
    description:
      "FitTrack_frontend is a modern, React-based frontend scaffold designed for building scalable fitness tracking applications. It leverages TypeScript, Vite, TailwindCSS, and a modular architecture to deliver a fast, maintainable, and visually cohesive user interface.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "JWT",
      "Express.js",
    ],
    featuredTech: ["React", "TypeScript", "PostgreSQL"],
    github: "https://github.com/Gugoraaa/FitTrack_frontend",
  },
  {
    slug: "chefops",
    title: "ChefOps",
    shortDescription:
      "Kitchen order management app that tracks restaurant orders by status in real time.",
    description:
      "ChefOps is a kitchen order management application designed to help restaurants manage and track orders by status (Queued, Cooking, Completed, Canceled) in real time.",
    technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    featuredTech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Gugoraaa/ChefOps",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCardTech(project: Project): string[] {
  return project.featuredTech ?? project.technologies.slice(0, 3);
}

/** Teaser for the deepest thing written about a project, used to pull
 *  readers into the engineering write-up instead of leaving it buried. */
export function getCardHighlight(project: Project): string | undefined {
  return project.challenges?.[0]?.title;
}
