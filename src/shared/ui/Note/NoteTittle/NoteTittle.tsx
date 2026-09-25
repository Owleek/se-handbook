import "./NoteTittle.css"

export function NoteTittle({ children }: Readonly<{children: React.ReactNode}>) {
    return <h2 className="NoteTittle">{ children }</h2>
}