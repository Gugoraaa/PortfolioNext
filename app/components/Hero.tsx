import NextImage from "next/image";

export default function Hero() {
  return (
    <section className="mb-12 sm:mb-16 py-8 sm:py-10 lg:py-12">
      <div className="flex flex-col items-center sm:flex-row sm:items-center gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
        <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 flex-shrink-0">
          <NextImage
            src="/img/gusProfile.jpeg"
            alt="Gustavo González"
            width={144}
            height={144}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Hi, I&apos;m Gustavo González
          </h1>
          <p className="text-lg sm:text-xl max-w-xl text-balance">
            I build multi-tenant backends — PostgreSQL at scale, tenant
            isolation, and systems that stay safe to refactor.
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Co-Founder &amp; CTO at AquaSense
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span className="whitespace-nowrap">
              Computer Science at Tecnológico de Monterrey
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
