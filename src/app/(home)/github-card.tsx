import { getGithubContributions } from "@/utils/get-github-contributions"

const GithubCard = async () => {

    const contributions = await getGithubContributions();

    const getGithubGraphLevelClass = (level: number) => {
        if (level === 0) {
            return 'bg-github-graph-l0 dark:bg-github-graph-night-l0';
        }
        else if (level === 1) {
            return 'bg-github-graph-l1 dark:bg-github-graph-night-l1';
        }
        else if (level === 2) {
            return 'bg-github-graph-l2 dark:bg-github-graph-night-l2';
        }
        else if (level === 3) {
            return 'bg-github-graph-l3 dark:bg-github-graph-night-l3';
        }
        else if (level === 4) {
            return 'bg-github-graph-l4 dark:bg-github-graph-night-l4';
        }
        else {
            return 'bg-github-graph-l0 dark:bg-github-graph-night-l0'
        }
    }

    return (
        <a className="col-span-2 row-span-2 h-full w-full card flex flex-col dark:bg-slate-50/5 hover:bg-slate-50 dark:hover:bg-slate-50/10 overflow-hidden"
            href="https://github.com/kylerummens" target="_blank" rel="noreferrer">
            <div className="logo-box bg-github">
                <img src="/github.png" alt="Github logo" />
            </div>
            <div className="label">kylerummens</div>
            <div className="secondary-label text-xs">9 repositories</div>
            <div className="secondary-label text-xs mb-4">840 contributions in the past year</div>
            <div className="grow"></div>

            <div className="flex gap-1 justify-end">
                {contributions.map(week => 
                    <div key={week[0].date} className="flex flex-col gap-1">
                        {week.map((contribution: any) => 
                            <div key={contribution.date} className={`github-graph-day ${getGithubGraphLevelClass(contribution.level)}`}></div>
                        )}
                    </div>
                )}
            </div>
        </a>
    )
}

export default GithubCard;