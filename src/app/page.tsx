import Link from "../../node_modules/next/link"



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
     <h1>ADVENT OF NEXT</h1>
     <p>Hi, I am quite new to programming, but I have been solving problems all my life. This is my take on the Advent of Code 2023.</p>
     <a href="https://adventofcode.com/2023">You can try too</a>
     <ul>
<li>
     <Link href={"/day1"} >DAY 1</Link>
</li>
     </ul>
    </main>
  )
}
