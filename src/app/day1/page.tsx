import React from 'react'
import { promises as fs } from 'fs'
export default async function Day1() {
	const file = await fs.readFile(process.cwd() + '/public/input-day1.txt', 'utf8')
	const isNumber = (value: string): boolean => {
		return !isNaN(Number(value))
	}

	const firstScan = file.replace(/one|two|three|four|five|six|seven|eight|nine/g, (match) => {
		const wordToDigit = {
			one: 'o1e',
			two: 't2o',
			three: 't3e',
			four: 'f4r',
			five: 'f5e',
			six: 's6x',
			seven: 's7n',
			eight: 'e8t',
			nine: 'n9e',
		}
		return wordToDigit[match]
	})

	const secondScan = firstScan.replace(/one|two|three|four|five|six|seven|eight|nine/g, (match) => {
		const wordToDigit = {
			one: 'o1e',
			two: 't2o',
			three: 't3e',
			four: 'f4r',
			five: 'f5e',
			six: 's6x',
			seven: 's7n',
			eight: 'e8t',
			nine: 'n9e',
		}
		return wordToDigit[match]
	})

	const arrayFilePart1 = file.split('\n')
	const arrayFilePart2 = secondScan.split('\n')

	const getCalibrationSum = (data: Array<string>) => {
		const digitsArr = data.map((value) => {
			return value
				.split('')
				.filter((char) => isNumber(char))
				.map((num) => Number(num))
		})

		const doubles = digitsArr
			.map((arr) => {
				if (arr.length > 1) {
					return [arr[0] * 10 + arr[arr.length - 1]]
				} else {
					return [arr[0] * 10 + arr[0]]
				}
			})
			.flat()

		return doubles.reduce((acc, curr) => acc + curr, 0)
	}
	console.log(getCalibrationSum(arrayFilePart1)) // 54601
	console.log(getCalibrationSum(arrayFilePart2)) // 54078

	return (
		<section className="mx-auto max-w-3xl">
			<h1 className="py-4 text-xl">Puzzle</h1>
			<a href="https://adventofcode.com/2023/day/1">Link to the Puzzle</a>
			<h1 className="py-4 text-xl">Data</h1>
			<pre className="max-w-5xl overflow-scroll">{`${arrayFilePart1}`}</pre>
			<h1 className="py-4 text-xl">Code</h1>
			<pre>
				<code className="bg-green-900 font-mono text-[#EEE]">
					{` const file = await fs.readFile(process.cwd() + '/public/input-day1.txt', 'utf8');
    const isNumber = (value: string): boolean => {
        return !isNaN(Number(value));
      };

      const firstScan = file.replace(/one|two|three|four|five|six|seven|eight|nine/g, match => {
          const wordToDigit = {
              "one": "o1e",
              "two": "t2o",
              "three": "t3e",
              "four": "f4r",
              "five": "f5e",
              "six": "s6x",
              "seven": "s7n",
              "eight": "e8t",
              "nine": "n9e"
            };
            return  wordToDigit[match];
        });

        const secondScan = firstScan.replace(/one|two|three|four|five|six|seven|eight|nine/g, match => {
            const wordToDigit = {
                "one": "o1e",
                "two": "t2o",
                "three": "t3e",
                "four": "f4r",
                "five": "f5e",
                "six": "s6x",
                "seven": "s7n",
                "eight": "e8t",
                "nine": "n9e"
              };
              return  wordToDigit[match];
          });
        
        
        const arrayFilePart1 = file.split('\n')
        const arrayFilePart2 = secondScan.split('\n')

const getCalibrationSum = (data: Array<string>) => {

    const digitsArr = data.map(value => {
    return value.split("").filter(char => isNumber(char)).map(num => Number(num))
    })
    
    const doubles = digitsArr.map(arr => {
        if (arr.length > 1) {
            return [arr[0] * 10 + arr[arr.length -1]]
        } else {
            return [arr[0] * 10 + arr[0]]
        }
    }).flat()
    
    return doubles.reduce((acc, curr)=> acc + curr, 0)
}
console.log(getCalibrationSum(arrayFilePart1)); // 54601
console.log(getCalibrationSum(arrayFilePart2)); // 54078



 `}
				</code>
			</pre>
		</section>
	)
}
