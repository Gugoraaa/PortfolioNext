import Link from "next/link";

type Role = {
  company: string;
  title: string;
  period: string;
  note?: string;
  bullets: string[];
  skills: string;
  /** Links to the project page when a deeper write-up exists. */
  href?: string;
};

const roles: Role[] = [
  {
    company: "Veeda",
    title: "Senior Software Engineer",
    period: "August 2026 – January 2027",
    bullets: [
      "Led an architectural migration of approximately 440 backend routes, owning roughly 80% of the migration scope and decomposing the legacy RPC routing monolith into modular domain-based components.",
      "Defined and implemented architectural boundaries across routes, controllers, services and repositories, migrating business logic to the appropriate layers while preserving existing API contracts, authentication, validation and production behavior.",
      "Provided technical leadership to 2 junior software engineers — assigning migration work, reviewing pull requests, guiding implementation decisions and enforcing testing, rollback and staging validation standards.",
      "Established migration safeguards including PRE/POST characterization tests, HTTP route inventories, architecture-boundary tests, dependency ratchets and staging smoke tests to refactor the production backend without architectural regressions.",
    ],
    skills:
      "TypeScript, Node.js, Backend Architecture, Testing, Technical Leadership",
  },
  {
    company: "AquaSense",
    title: "Co-Founder & CTO",
    period: "2026 – Present",
    href: "/projects/aquasense",
    bullets: [
      "Co-founded and independently architected the technical platform for a multi-tenant SaaS product that transforms raw PLC/SCADA telemetry from water treatment plants into real-time monitoring, regulatory compliance, predictive maintenance and chemical inventory workflows.",
      "Designed a high-throughput PostgreSQL time-series architecture targeting approximately 430 sensor inserts per second across 100 plants, using range partitioning, hierarchical rollups, deadband filtering, automated retention and idempotent processing for late-arriving data.",
      "Built the platform's security architecture with PostgreSQL Row Level Security, RBAC and SECURITY DEFINER RPCs, including tenant isolation across partitioned telemetry tables and protected transactional workflows.",
      "Developed a separate NestJS ingestion service for heterogeneous industrial protocols including Modbus and OPC UA, together with an append-only chemical inventory ledger, alert processing, compliance reporting and consumption-based reorder forecasting.",
    ],
    skills:
      "PostgreSQL, TypeScript, Next.js, NestJS, Supabase, Multi-tenant Architecture",
  },
  {
    company: "Coppel",
    title: "Software Engineer Intern – Full Stack Development",
    period: "February 2024 – May 2024",
    bullets: [
      "Developed and maintained features for the Sistema Integral de Exhibición (SIE), an internal platform used to manage product displays across stores.",
      "Built full-stack functionality using Angular, TypeScript, PHP and PostgreSQL, integrating frontend components with backend services and database operations.",
      "Optimized PostgreSQL functions and queries, and worked with Microsoft Azure services to support application deployment and existing workflows.",
    ],
    skills: "Angular, TypeScript, PHP, PostgreSQL, Azure",
  },
];

export default function WorkExperience() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2  inline-block">
        Work Experience
      </h2>

      <div className="space-y-10">
        {roles.map((role) => (
          <div key={role.company}>
            <div className="flex justify-between items-start gap-4 mb-2">
              <div>
                <h3 className="text-xl font-bold">
                  {role.href ? (
                    <Link
                      href={role.href}
                      className="rounded-sm underline decoration-[var(--card-border-hover)] underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                    >
                      {role.company}
                    </Link>
                  ) : (
                    role.company
                  )}
                </h3>
                <p className="italic ">{role.title}</p>
                {role.note && <p className="text-sm  italic">{role.note}</p>}
              </div>
              <span className="text-sm shrink-0 text-right">{role.period}</span>
            </div>

            <ul className="list-disc pl-5 space-y-2 ">
              {role.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-4">
              <span className="font-semibold">Skills:</span> {role.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
