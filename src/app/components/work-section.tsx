import { Section } from "./section";

type Job = {
  company: string;
  location: string;
  positions: JobPosition[];
};

type JobPosition = {
  title: string;
  responsibilities: string[];
  startDate: string;
  endDate: string;
};

const jobs: Job[] = [
  {
    company: "ProdataKey",
    location: "Draper, Utah",
    positions: [
      {
        title: "Full-Stack Software Engineer - Team Lead",
        responsibilities: ["Todo"],
        startDate: "May 2024",
        endDate: "Present",
      },
      {
        title: "Full-Stack Software Engineer",
        responsibilities: ["Todo"],
        startDate: "July 2023",
        endDate: "May 2024",
      },
    ],
  },
  {
    company: "BroadbandHub",
    location: "North Salt Lake, Utah",
    positions: [
      {
        title: "Software Engineer - Team Lead",
        responsibilities: [
          "Led the initial planning and development of the cloud architecture for the BroadbandHub.us web application",
          "Created a fault-tolerant data processing server in Node.js/TypeScript to handle large amounts of data ingest on an hourly basis",
          "Wrote SQL queries, functions, and policies that were deployed to a production Postgres database",
          "Built, tested, and shipped a full Next.js/React web application",
          "Managed the scaling of the web application and database on Google Cloud Platform with Docker",
          "Integrated our systems with Stripe billing to automate client subscription payments",
          "Met regularly with clients to understand their needs and know how to improve our product",
          "Oversaw a team of junior developers and interns, including hiring, workload assignments, code reviews, and team building",
          "Led sales presentations to top-tier and enterprise clients, leading to contracts with large internet service providers such as Lumen and Zayo",
          "Wrote an array of complex business contracts for large deals",
        ],
        startDate: "July 2020",
        endDate: "July 2023",
      },
      {
        title: "Software Engineer",
        responsibilities: [
          "Developed an internal tool in Node.js/TypeScript for data ingestion that replaced a significant amount of manual data entry tasks, saving ~8500 hours of work per year",
          "Managed a production Postgres database",
          "Wrote advanced SQL queries which provided analytical insights to internet service providers such as Zayo, Lumen, and Google, leading to large internet infrastructure projects around the United States",
        ],
        startDate: "July 2019",
        endDate: "July 2020",
      },
    ],
  },
  {
    company: "Orbit Irrigation Products",
    location: "North Salt Lake, Utah",
    positions: [
      {
        title: "Information Technology Intern",
        responsibilities: [
          "Developed an in-house tool used to track versions and releases of the Orbit B-Hyve app. The app was built in Angular",
          "Worked alongside backend engineers and database admins to integrate the application with on-premise servers and database",
        ],
        startDate: "September 2016",
        endDate: "May 2017",
      },
    ],
  },
];

export function WorkSection() {
  return (
    <Section title="Work">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {jobs.map((job) => (
          <Job key={job.company} job={job} />
        ))}
      </div>
    </Section>
  );
}

function Job({ job }: { job: Job }) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      <div>
        <h3 className="text-base font-medium">{job.company}</h3>
        <h4 className="text-muted-foreground text-sm">{job.location}</h4>
      </div>
      <div className="col-span-2 space-y-4">
        {job.positions.map((position) => (
          <div key={position.title}>
            <h4 className="text-base italic">{position.title}</h4>
            <p className="text-xs text-muted-foreground mb-3">
              {position.startDate} - {position.endDate}
            </p>
            <ul className="space-y-1">
              {position.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="before:content-['-'] before:mr-2 text-xs text-muted-foreground"
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
