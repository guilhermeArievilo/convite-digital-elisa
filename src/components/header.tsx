import Link from "next/link";

export default function Header () {
  return (
    <header className="bg-background py-4">
      <nav className="container flex flex-row items-center justify-between">
        <ul className="flex flex-row items-center gap-4 text-xs uppercase shrink">
          <li>
            <Link href={'/#informacoes'}>Informações</Link>
          </li>
          <li>
            <Link href={'/#album'}>Album</Link>
          </li>
        </ul>
        <a href={`https://api.whatsapp.com/send?phone=557499612233&text=Confirmado`} target="_blank" className="text-white text-xs uppercase bg-secondary py-4 px-3 rounded-full shrink-0">Confirmar Presença</a>
      </nav>
    </header>
  )
}