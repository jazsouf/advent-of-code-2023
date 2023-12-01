import React from 'react'
import { promises as fs } from 'fs';
export default async function Day1() {
    const file = await fs.readFile(process.cwd() + '/public/input-day1.txt', 'utf8');
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



 


  return (
    <section className='max-w-3xl mx-auto'>
        <h1 className='text-xl py-4'>Puzzle</h1>
        <p className='italic'>{`--- Day 1: Trebuchet?! ---
Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

You try to ask why they can't just use a weather machine ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a trebuchet ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?

--- Part Two ---
Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values?`}</p>
    <h1 className='text-xl py-4'>Data</h1>
    <pre className='max-w-5xl overflow-scroll'>{`${arrayFilePart1}`}</pre>
    <h1 className='text-xl py-4'>Code</h1>
    <pre><code className='font-mono'>
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
</code></pre>
    </section>
  )
}
