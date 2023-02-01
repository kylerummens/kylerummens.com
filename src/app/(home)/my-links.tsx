import GithubCard from "./github-card";
import InstagramCard from "./instagram-card"
import LinkedinCard from "./linkedin-card"
import StackoverflowCard from "./stackoverflow-card";
import TwitterCard from "./twitter-card";

const MyLinks = () => {

    return (
        <div className="mb-20">
            <div className="text-xl font-medium label m-6">My links</div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-10">
                <InstagramCard />
                <LinkedinCard />
                {/* @ts-expect-error Server Component */}
                <GithubCard />
                <TwitterCard />
                <StackoverflowCard />
            </div>
        </div>
    )
}

export default MyLinks;