const Code = () => {

    const code_links: { link: string, title: string, description: string }[] = [
        {
            link: 'https://www.npmjs.com/package/kml-to-geojson',
            title: 'kml-to-geojson',
            description: 'Convert KML content to GeoJSON, preserving style and folder data'
        },
        {
            link: 'https://github.com/kylerummens/angular-supabase-auth',
            title: 'Angular Supabase Auth',
            description: 'Full code example using Supabase Auth, Database, and Realtime to manage authentication in Angular'
        },
        {
            link: 'https://github.com/kylerummens/kylerummens.com',
            title: 'kylerummens.com',
            description: 'Source code for my personal website, written in Typescript using Angular Universal'
        },
        {
            link: 'https://github.com/kylerummens/kml-to-geojson',
            title: 'kml-to-geojson',
            description: 'Source code for the npm package kml-to-geojson, written in Typescript'
        }
    ]

    const getCodeLinkImage = (link: string) => {
        const base_url = getCodeLinkBaseUrl(link);

        if (base_url === 'github.com') {
        return '/github.png';
        }
        else if (base_url === 'npmjs.com') {
        return '/npm.png';
        }
        return '';
    }

    const getCodeLinkBaseUrl = (link: string) => {
        return link.replace('https://', '').replace('http://', '').split('/')[0].replace('www.', '');
    }

    return (
        <div className="mb-20">
            <div className="text-xl font-medium label m-6">Code</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-10">
                {code_links.map(code_link =>
                  <a key={JSON.stringify(code_link)} href={code_link.link} target="_blank" rel="noreferrer"
                    className="card hover:bg-slate-50 dark:bg-slate-50/5 dark:hover:bg-slate-50/10">

                    <div className={`mb-5 ${getCodeLinkBaseUrl(code_link.link) === 'github.com' ? 'rounded-full bg-github inline-flex items-center justify-center' : ''}`}
                        style={{ padding: getCodeLinkBaseUrl(code_link.link) === 'github.com' ? '4px 4px 5px 4px' : '0'}}>
                        <img src={getCodeLinkImage(code_link.link)} style={{maxHeight:40 }} alt="Code link" />
                    </div>

                    <h1 className="label">{ code_link.title }</h1>
                    <h2 className="text-sm font-light secondary-label line-clamp-2">
                        {
                        code_link.description }</h2>
                </a>  
                )}
            </div>
        </div>
    )

}

export default Code;