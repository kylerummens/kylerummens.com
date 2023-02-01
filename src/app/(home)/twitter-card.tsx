const TwitterCard = () => {
    return (
        <a className="h-40 w-full card bg-twitter/10 hover:bg-twitter/15" href="https://twitter.com/KyleRummens"
            target="_blank" rel="noreferrer">
            <div className="logo-box bg-twitter">
                <img src="/twitter.png" alt="Twitter logo" />
            </div>
            <div className="label">@KyleRummens</div>
            <div className="secondary-label text-xs">82 followers</div>
        </a>
    )
}

export default TwitterCard;