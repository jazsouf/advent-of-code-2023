import { promises as fs } from 'fs'

export default async function Day4() {
	const file = await fs.readFile(process.cwd() + '/public/input-day4.txt', 'utf8')
	const scratchCardData = file.split('\n')

	const structuredData = scratchCardData.map((line, i) => line.split(':')[1].split('|'))

	const sanitizedData = structuredData.map((double: string[], i) => {
		return double.map((seq) =>
			seq
				.trim()
				.split(' ')
				.filter((n) => n !== '')
				.map((n) => Number(n))
		)
	})

	// easy to use data
	let objectifiedData: { winning: number[]; available: number[]; worth: number }[] = []
	sanitizedData.forEach((card, i) => {
		objectifiedData.push({ winning: card[0], available: card[1], worth: 0 })
	})

	//logic
	objectifiedData.map((card, i) => {
		const allNumbers = card.available
		const winNumbers = card.winning
		let factor = 0
		allNumbers.forEach((n) => {
			if (winNumbers.includes(n)) {
				factor++
			}
		})
		if (factor === 0) {
			return
		} else {
			card.worth = 2 ** (factor - 1)
		}
	})

	//result
	const score = objectifiedData.map((card) => card.worth).reduce((acc, curr) => acc + curr, 0)

	// PART 2

	let newObjectifiedData: { winning: number[]; available: number[]; total: number }[] = []

	sanitizedData.forEach((card, i) => {
		newObjectifiedData.push({ winning: card[0], available: card[1], total: 1 })
	})

	// add padding at bottom
	const pad = new Array(5).fill(1)
	pad.forEach((pad) => newObjectifiedData.push({ winning: [0], available: [1], total: 0 }))

	//logic
	newObjectifiedData.forEach((card, i) => {
		const allNumbers = card.available
		const winNumbers = card.winning
		const rounds = new Array(card.total).fill(1)
		rounds.forEach((round) => {
			let matches = 0
			allNumbers.forEach((n) => {
				if (winNumbers.includes(n)) {
					matches++
				}
			})
			const scoring = new Array(matches).fill(1)
			scoring.forEach((w, j) => {
				newObjectifiedData[i + 1 + j].total += 1
			})
		})
	})

	// remove padding
	pad.forEach((pad) => newObjectifiedData.unshift())

	const score2 = newObjectifiedData.map((card) => card.total).reduce((acc, curr) => acc + curr, 0) // 5554894

	return (
		<section className="mx-auto max-w-3xl">
			<h1 className="py-4 text-xl">Puzzle</h1>
			<a href="https://adventofcode.com/2023/day/3">Link to the Puzzle</a>
			<h1 className="py-4 text-xl">Data</h1>
			<pre className="max-w-5xl overflow-scroll">{`${scratchCardData}`}</pre>
			<h1 className="py-4 text-xl">Code</h1>
			<pre>
				<code className="bg-green-900 font-mono text-[#EEE]">
					{`  const file = await fs.readFile(process.cwd() + '/public/input-day4.txt', 'utf8')
	const scratchCardData = file.split('\n')

	const structuredData = scratchCardData.map((line, i) => line.split(':')[1].split('|'))

	const sanitizedData = structuredData.map((double: string[], i) => {
		return double.map((seq) =>
			seq
				.trim()
				.split(' ')
				.filter((n) => n !== '')
				.map((n) => Number(n))
		)
	})

	// easy to use data
	let objectifiedData: { winning: number[]; available: number[]; worth: number }[] = []
	sanitizedData.forEach((card, i) => {
		objectifiedData.push({ winning: card[0], available: card[1], worth: 0 })
	})

	//logic
	objectifiedData.map((card, i) => {
		const allNumbers = card.available
		const winNumbers = card.winning
		let factor = 0
		allNumbers.forEach((n) => {
			if (winNumbers.includes(n)) {
				factor++
			}
		})
		if (factor === 0) {
			return
		} else {
			card.worth = 2 ** (factor - 1)
		}
	})

	//result
	const score = objectifiedData.map((card) => card.worth).reduce((acc, curr) => acc + curr, 0)

	// PART 2

	let newObjectifiedData: { winning: number[]; available: number[]; total: number }[] = []

	sanitizedData.forEach((card, i) => {
		newObjectifiedData.push({ winning: card[0], available: card[1], total: 1 })
	})

	// add padding at bottom
	const pad = new Array(5).fill(1)
	pad.forEach((pad) => newObjectifiedData.push({ winning: [0], available: [1], total: 0 }))

	//logic
	newObjectifiedData.forEach((card, i) => {
		const allNumbers = card.available
		const winNumbers = card.winning
		const rounds = new Array(card.total).fill(1)
		rounds.forEach((round) => {
			let matches = 0
			allNumbers.forEach((n) => {
				if (winNumbers.includes(n)) {
					matches++
				}
			})
			const scoring = new Array(matches).fill(1)
			scoring.forEach((w, j) => {
				newObjectifiedData[i + 1 + j].total += 1
			})
		})
	})

	// remove padding
	pad.forEach((pad) => newObjectifiedData.unshift())

	const score2 = newObjectifiedData.map((card) => card.total).reduce((acc, curr) => acc + curr, 0) // 5554894
`}
				</code>
			</pre>
		</section>
	)
}
