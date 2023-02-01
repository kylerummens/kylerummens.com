const StackoverflowCard = () => {
    return (
        <a className="h-40 w-full card bg-stackoverflow/10 hover:bg-stackoverflow/15"
            href="https://stackoverflow.com/users/4435313/krummens" target="_blank" rel="noreferrer">
            <div className="logo-box !p-1 bg-stackoverflow">
                <img src="/stackoverflow.png" alt="Stackoverflow logo" />
            </div>
            <div className="label">krummens</div>
            <div className="secondary-label text-xs">781 reputation</div>
            <div className="secondary-label text-xs">~90k people reached</div>
        </a>
    )
}

export default StackoverflowCard;