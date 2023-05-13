import Link from "next/link";

export default function Navbar() {

    return(
        <div className="p-3 text-2xl bg-emerald-900 fixed top-0 left-0 right-0">
            <div className="flex justify-center text-white">
                <Link className="pl-5 pr-2.5 border-5 border-white" href="/">Home</Link>
                <Link className="px-2.5" href="/portfolio">Portfolio</Link>
                <Link className="px-2.5" href="/about">About</Link>
                {/* <Link className="pl-2.5 pr-5" to="/contact">Contact</Link> */}
            </div>
        </div>
    )

}