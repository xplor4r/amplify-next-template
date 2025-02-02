import Link from "next/link"

function FooterLinkGroup({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: string}[]
}) {
    return (
        <div className="flex flex-col gap-2 px-6">
            <h3 className="font-semibold"> {title}</h3>
            <ul className="flex flex-col gap-2 text-sm">
                {
                    links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export const Footer = () => {
    return (
    <footer className="container mx-auto pt-16 pb-8 flex flex-col sm:flex-row border-black border-t-2 sm:gap-4 justify-between items-start">
        <Link href="/">
            Home 
        </Link>
        <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col gap-8">
                <FooterLinkGroup title="Help" links={[{
                    label: "About",
                    href: "#"
                }, {
                    label: "Our Team",
                    href: '#'
                }]} />
            
            </div>
            <div className="flex flex-col gap-8">
                <FooterLinkGroup title="Features" links={[
                    {
                        label: "Roadmap",
                        href: "#"
                    },
                    {
                        label: "Whats New",
                        href: '#'
                    }
                ]} />
            </div>
        </div>
        <p>
             Built by Team Executioner
        </p>
    </footer>
    )
}