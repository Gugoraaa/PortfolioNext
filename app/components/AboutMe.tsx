import SectionHeader from "./SectionHeader";
export default function AboutMe() {
    return (
        <section className="mb-12">
          <SectionHeader eyebrow="About" title="Who I am" />
          <div className="space-y-4 ">
            <p>
              Hello! I&apos;m a full-stack developer and the Co-Founder & CTO of
              AquaSense, a multi-tenant SaaS platform that turns raw PLC/SCADA
              telemetry from water treatment plants into real-time monitoring,
              regulatory compliance and chemical inventory. In parallel, I
              worked as a Senior Software Engineer at Veeda, where I led an
              architectural migration of a legacy RPC backend into modular,
              domain-based components and gave technical guidance to two junior
              engineers. I&apos;m doing all of this while pursuing a B.S. in Computer
              Science and Technology Engineering at Tecnológico de Monterrey
              (expected May 2028), with a 94/100 academic average.
            </p>
            <p>
              My work centers on backend architecture, PostgreSQL design and
              TypeScript systems that are safe to refactor — characterization
              tests, architecture-boundary checks and staging validation before
              anything reaches production. Outside of work I build full-stack
              products end to end, from the database schema up to the interface,
              most recently a coaching platform serving 300+ clients.
            </p>
          </div>
        </section>
    )
}
