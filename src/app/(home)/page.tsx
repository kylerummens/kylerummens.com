import Code from "./code";
import MyLinks from "./my-links";
import HomePublications from "./publications";

const Home = async () => {
  return (
    <main>
      <MyLinks />
      {/* @ts-expect-error Server Component */}
      <HomePublications />
      <Code />
    </main>
  )
}

export default Home;
