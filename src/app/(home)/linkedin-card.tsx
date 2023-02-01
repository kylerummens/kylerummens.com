const LinkedinCard = () => {
    return (
        <a className="h-40 w-full card bg-linkedin/10 hover:bg-linkedin/15" href="https://www.linkedin.com/in/kyle-rummens/" rel="noreferrer"
            target="_blank">
            <div className="logo-box !p-1 bg-linkedin">
                <img src="/linkedin.png" alt="Linkedin logo" />
            </div>
            <div className="label">kyle-rummens</div>
            <div className="secondary-label text-xs">106 followers</div>
            <div className="secondary-label text-xs">105 connections</div>
        </a>
    )
}

export default LinkedinCard;