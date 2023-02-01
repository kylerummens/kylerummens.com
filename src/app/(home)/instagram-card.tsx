const InstagramCard = () => {
    return (
        <a className="h-40 w-full card bg-instagram/10 hover:bg-instagram/15" href="https://www.instagram.com/kyle.rummens" rel="noreferrer"
            target="_blank">
            <div className="logo-box !p-0">
                <img src="/instagram.png" alt="Instagram logo" className="h-full w-full" />
            </div>
            <div className="label">@kyle.rummens</div>
            <div className="secondary-label text-xs">7 posts</div>
            <div className="secondary-label text-xs">92 followers</div>
        </a>
    )
}

export default InstagramCard;