import Link from "../../node_modules/next/link"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>ADVENT OF NEXT</h1>
     <p>Try to learn some JS/TS in NEXT with advent of code</p>
     <a href="https://adventofcode.com/2023">You can try too</a>
     <ul>
<li>
     <Link href={"/day1"} >DAY 1</Link>
</li>
     </ul>
    </main>
  )
}
