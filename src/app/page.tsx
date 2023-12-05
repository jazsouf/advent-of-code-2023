import Link from '../../node_modules/next/link'

export default function Home() {
	const days = new Array(25).fill('DAY')

	return (
		<main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-24 font-mono">
			<h1>ADVENT OF NEXT</h1>
			<p>
				Hi, I am quite new to programming, but I have been solving problems all my life. This is my
				take on the Advent of Code 2023.
			</p>
			<a href="https://adventofcode.com/2023">You can try too</a>
			<ul>
				{days.map((day, i) => {
					return (
						<li key={i}>
							<Link href={`/day${i + 1}`}>{`DAY ${i + 1}`}</Link>
						</li>
					)
				})}
			</ul>
		</main>
	)
}
