


export default function WorkExperience() {
    return (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2  inline-block">
            Work Experience
          </h2>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold">Coppel</h3>
              <p className="italic ">
                Intern - Software Engineer (Full Stack Developer)
              </p>
              <p className="text-sm  italic">(Unpaid internship)</p>
            </div>
            <span className="text-sm ">
              February 2024 – May 2024
            </span>
          </div>  

          <ul className="list-disc pl-5 space-y-2 ">
            {[
              "Improved and optimized PostgreSQL functions to enhance database performance and data retrieval efficiency.",
              "Developed and maintained features for the Sistema Integral de Exhibición (SIE), a platform managing product displays across multiple stores.",
              "Built and integrated a full-stack web application with Angular and TypeScript for the front-end and PHP for the backend.",
              "Deployed and managed cloud-based services on Microsoft Azure, ensuring scalability, security, and performance.",
              "Collaborated with cross-functional teams to implement new system features and optimize existing workflows.",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mt-4">
            <span className="font-semibold text-white">Skills:</span>{" "}
            {" Angular, TypeScript, PHP, PostgreSQL, Azure"}
          </p>
        </section>
    )

}