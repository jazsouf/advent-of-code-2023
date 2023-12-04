import { promises as fs } from 'fs';


export default async function Day3() {
    const file = await fs.readFile(process.cwd() + '/public/input-day3.txt', 'utf8');
    const engineData = file.split('\n')
    // locate the numbers
    // map to the number and all their suroundings => add dots on every side
    // check their surrounding for a symbol
    // filter the numbers
    // sum the numbers
    
    // add dots at the top and bottom
    const engineDataSandwiched = ['.'.repeat(140), ... engineData, ".".repeat(140)]

    // add dots to the sides
    const engineDataWrapped = engineDataSandwiched.map(line => "." + line + ".")

    // locate numbers
    const isNumber = (value: string): boolean => {
        return "0123456789".includes(value)
      };
      const isManyNumber = (value: string): boolean => {
        return !isNaN(Number(value));
      };
    
    const cloneData = structuredClone(engineDataWrapped)
    const numbersLocations: any[] = []
    engineDataWrapped.forEach((line,Ypos)=> {
        if (Ypos === 0) return
        if (Ypos=== engineDataWrapped.length -1) return
        let lastEnd = 0
        let [number, xStart,xEnd , y, surrounding] = ["",0,0, 0, ""]
    line.split('').forEach((char, Xpos)=> {
        if (Xpos === 0) return
        if (Xpos === line.length -1) return
        if (Xpos < lastEnd + 1) return
        if (isNumber(char) ) {
            number = char
            xStart = Xpos
            xEnd = Xpos
            y = Ypos
            surrounding = cloneData[Ypos][Xpos - 1] + cloneData[Ypos - 1][Xpos - 1] + cloneData[Ypos + 1][Xpos - 1] + cloneData[Ypos + 1][Xpos] + cloneData[Ypos - 1][Xpos]
            if (isNumber(cloneData[Ypos][Xpos + 1])) {
                number += cloneData[Ypos][Xpos + 1]
                xEnd += 1
                surrounding += cloneData[Ypos + 1][xEnd] + cloneData[Ypos - 1][xEnd]
                if (isNumber(cloneData[Ypos][Xpos + 2])) {
                    number += cloneData[Ypos][Xpos + 2]
                    xEnd += 1
                    surrounding += cloneData[Ypos + 1][xEnd] + cloneData[Ypos - 1][xEnd] + cloneData[Ypos][xEnd + 1] + cloneData[Ypos + 1][xEnd + 1] + cloneData[Ypos - 1][xEnd + 1]
                } else {
                surrounding += cloneData[Ypos][xEnd + 1] + cloneData[Ypos + 1][xEnd + 1] + cloneData[Ypos -1][xEnd + 1]
                }
            } else {
                surrounding += cloneData[Ypos][xEnd + 1] + cloneData[Ypos + 1][xEnd + 1] + cloneData[Ypos -1][xEnd + 1]
            }
            // numbersLocations.push([number, xStart,xEnd , y, surrounding])
            numbersLocations.push([number, surrounding, y, xStart, xEnd])
            lastEnd = xEnd
        }
    })
   })
    
const filteredNumber = numbersLocations.filter(numLoc => numLoc[1].split("").some((char: string) => char !== "."))
    
const properNumbersSum = filteredNumber.map(numLoc => Number(numLoc[0])).flat().reduce((acc, curr)=> acc + curr, 0)

console.log(properNumbersSum); // 520135

// Part 2

const numbersNearGear = numbersLocations.filter(numLoc => numLoc[1].split("").some((char: string) => char === "*"))

const gearsLocation: any[] = []
engineDataWrapped.forEach((line, Ypos)=> {
    if (Ypos === 0) return
    if (Ypos=== engineDataWrapped.length -1) return
    let [ x , y, surrounding] = [0,0,""]
    line.split('').forEach((char, Xpos)=> {
        if (char === '*') {
            gearsLocation.push([Xpos, Ypos, [cloneData[Ypos - 1][Xpos -1] + cloneData[Ypos - 1][Xpos] + cloneData[Ypos - 1][Xpos + 1], cloneData[Ypos][Xpos - 1], cloneData[Ypos][Xpos + 1],  cloneData[Ypos + 1][Xpos -1] + cloneData[Ypos + 1][Xpos] + cloneData[Ypos + 1][Xpos + 1] ]])
        }
    })
})
const filteredGears = gearsLocation.filter(gearLoc => {
    let partNumbers = 0
    gearLoc[2].forEach((pos: string)=> {
        if (/\d+/.test(pos)) {
            partNumbers++
        }
        
    })
    return partNumbers
})
//gearLoc = [x, y, surr]
// numLoc = [number, surr, y, xStart, xEnd]
const doubles = []
filteredGears.forEach(gearLoc => {
    let gX = gearLoc[0]
    let gY = gearLoc[1]
    let possibleX = [gX - 1, gX, gX + 1]
    let possibleY = [gY -1, gY, gY + 1]
    let pair: any[] = []
    numbersNearGear.forEach(numLoc => {
        let startX = numLoc[3]
        let endX = numLoc[4]
        let nY = numLoc[2]
      
        
        if ((possibleX.includes(startX) || possibleX.includes(endX) ) && possibleY.includes(nY)) {
            pair.push(numLoc[0])
        }
    })
    pair.length === 2 && doubles.push(pair)
})


const ratiosSum = doubles.map(doubles=> Number(doubles[0]) * Number(doubles[1])).reduce((acc, curr)=> acc+ curr, 0)

console.log(ratiosSum); // 72514855


    
  return (<section className='max-w-3xl mx-auto'>
  <h1 className='text-xl py-4'>Puzzle</h1>
  <a href="https://adventofcode.com/2023/day/3">Link to the Puzzle</a>
<h1 className='text-xl py-4'>Data</h1>
<pre className='max-w-5xl overflow-scroll'>{`${engineData}`}</pre>
<h1 className='text-xl py-4'>Code</h1>
<pre><code className='font-mono bg-green-900 text-[#EEE]'>
{`  const file = await fs.readFile(process.cwd() + '/public/input-day3.txt', 'utf8');
    const engineData = file.split('\n')
    // locate the numbers
    // map to the number and all their suroundings => add dots on every side
    // check their surrounding for a symbol
    // filter the numbers
    // sum the numbers
    
    // add dots at the top and bottom
    const engineDataSandwiched = ['.'.repeat(140), ... engineData, ".".repeat(140)]

    // add dots to the sides
    const engineDataWrapped = engineDataSandwiched.map(line => "." + line + ".")

    // locate numbers
    const isNumber = (value: string): boolean => {
        return "0123456789".includes(value)
      };
      const isManyNumber = (value: string): boolean => {
        return !isNaN(Number(value));
      };
    
    const cloneData = structuredClone(engineDataWrapped)
    const numbersLocations: any[] = []
    engineDataWrapped.forEach((line,Ypos)=> {
        if (Ypos === 0) return
        if (Ypos=== engineDataWrapped.length -1) return
        let lastEnd = 0
        let [number, xStart,xEnd , y, surrounding] = ["",0,0, 0, ""]
    line.split('').forEach((char, Xpos)=> {
        if (Xpos === 0) return
        if (Xpos === line.length -1) return
        if (Xpos < lastEnd + 1) return
        if (isNumber(char) ) {
            number = char
            xStart = Xpos
            xEnd = Xpos
            y = Ypos
            surrounding = cloneData[Ypos][Xpos - 1] + cloneData[Ypos - 1][Xpos - 1] + cloneData[Ypos + 1][Xpos - 1] + cloneData[Ypos + 1][Xpos] + cloneData[Ypos - 1][Xpos]
            if (isNumber(cloneData[Ypos][Xpos + 1])) {
                number += cloneData[Ypos][Xpos + 1]
                xEnd += 1
                surrounding += cloneData[Ypos + 1][xEnd] + cloneData[Ypos - 1][xEnd]
                if (isNumber(cloneData[Ypos][Xpos + 2])) {
                    number += cloneData[Ypos][Xpos + 2]
                    xEnd += 1
                    surrounding += cloneData[Ypos + 1][xEnd] + cloneData[Ypos - 1][xEnd] + cloneData[Ypos][xEnd + 1] + cloneData[Ypos + 1][xEnd + 1] + cloneData[Ypos - 1][xEnd + 1]
                } else {
                surrounding += cloneData[Ypos][xEnd + 1] + cloneData[Ypos + 1][xEnd + 1] + cloneData[Ypos -1][xEnd + 1]
                }
            } else {
                surrounding += cloneData[Ypos][xEnd + 1] + cloneData[Ypos + 1][xEnd + 1] + cloneData[Ypos -1][xEnd + 1]
            }
            // numbersLocations.push([number, xStart,xEnd , y, surrounding])
            numbersLocations.push([number, surrounding, y, xStart, xEnd])
            lastEnd = xEnd
        }
    })
   })
    
const filteredNumber = numbersLocations.filter(numLoc => numLoc[1].split("").some((char: string) => char !== "."))
    
const properNumbersSum = filteredNumber.map(numLoc => Number(numLoc[0])).flat().reduce((acc, curr)=> acc + curr, 0)

console.log(properNumbersSum); // 520135

// Part 2

const numbersNearGear = numbersLocations.filter(numLoc => numLoc[1].split("").some((char: string) => char === "*"))

const gearsLocation: any[] = []
engineDataWrapped.forEach((line, Ypos)=> {
    if (Ypos === 0) return
    if (Ypos=== engineDataWrapped.length -1) return
    let [ x , y, surrounding] = [0,0,""]
    line.split('').forEach((char, Xpos)=> {
        if (char === '*') {
            gearsLocation.push([Xpos, Ypos, [cloneData[Ypos - 1][Xpos -1] + cloneData[Ypos - 1][Xpos] + cloneData[Ypos - 1][Xpos + 1], cloneData[Ypos][Xpos - 1], cloneData[Ypos][Xpos + 1],  cloneData[Ypos + 1][Xpos -1] + cloneData[Ypos + 1][Xpos] + cloneData[Ypos + 1][Xpos + 1] ]])
        }
    })
})
const filteredGears = gearsLocation.filter(gearLoc => {
    let partNumbers = 0
    gearLoc[2].forEach((pos: string)=> {
        if (/\d+/.test(pos)) {
            partNumbers++
        }
        
    })
    return partNumbers
})
//gearLoc = [x, y, surr]
// numLoc = [number, surr, y, xStart, xEnd]
const doubles = []
filteredGears.forEach(gearLoc => {
    let gX = gearLoc[0]
    let gY = gearLoc[1]
    let possibleX = [gX - 1, gX, gX + 1]
    let possibleY = [gY -1, gY, gY + 1]
    let pair: any[] = []
    numbersNearGear.forEach(numLoc => {
        let startX = numLoc[3]
        let endX = numLoc[4]
        let nY = numLoc[2]
      
        
        if ((possibleX.includes(startX) || possibleX.includes(endX) ) && possibleY.includes(nY)) {
            pair.push(numLoc[0])
        }
    })
    pair.length === 2 && doubles.push(pair)
})


const ratiosSum = doubles.map(doubles=> Number(doubles[0]) * Number(doubles[1])).reduce((acc, curr)=> acc+ curr, 0)

console.log(ratiosSum); // 72514855
`}
</code></pre>
</section>
)
}
