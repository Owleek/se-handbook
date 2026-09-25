import "./NoteSubTittle.css"

export function NoteSubTittle({ children }: Readonly<{children: React.ReactNode}>) {
    return <h3 className="NoteSubTittle">{ children }</h3>
}