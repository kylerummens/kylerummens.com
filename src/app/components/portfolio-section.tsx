import { Section } from "./section";

type PortfolioItem = {
  title: string;
  description: string;
};

const portfolio: PortfolioItem[] = [
  {
    title: "OneTel Geospatial Distance Calculations Automation",
    description:
      "Multi-threaded Node.js application which accepted two shapefiles as input. For each geometry object from the first shapefile, it would calculate the shortest distance between that geometry object and the second shapefile. The application was optimized to handle shapefiles with sometimes millions of geometry objects, performing a few trillion geospatial calculations over multiple threads in a matter of minutes. This application was then built into a service as part of a data processing pipeline.",
  },
  {
    title: "BroadbandHub ETL Pipeline",
    description:
      "Fault-tolerant Node.js ETL pipeline which stores and retries any failed executions. Execution status is synced with a Postgres database for real-time pipeline tracking. This application runs on a production server in Docker.",
  },
  {
    title: "BroadbandHub Geospatial Processing Application",
    description:
      "Web application built in Next.js/React allowing internet service providers to upload large mapping shapefiles to a Postgres database, then be rendered via a Node.js tile server. The backend handles processing of uploaded map files, rendering and caching vector tiles, and serving vector tiles. The application has proven to be able to process and performantly render shapefiles as large as 100Gb.",
  },
  {
    title: "NPM kml-to-geojson Package",
    description:
      "Javascript utility written in Typescript, converts KML shapefiles into GeoJSON while preserving styling and folder structure.",
  },
];

export function PortfolioSection() {
  return (
    <Section title="Portfolio" className="print:hidden">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {portfolio.map((item) => (
          <div key={item.title} className="py-4 space-y-2">
            <h3 className="text-base italic">{item.title}</h3>
            <p className="text-sm print:text-xs text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
