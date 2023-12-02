import { promises as fs } from 'fs';


export default async function Day2() {
    const file = await fs.readFile(process.cwd() + '/public/input-day2.txt', 'utf8');
    const gamesData = file.split('\n')
   

    //PART 1
const cleanData = gamesData.map((game, i) => {
    return {id:i+1,
    gameData: game.split(":")[1].split(";").map(play=> play.split(",")).flat().map(cube=> cube.replace(/ /g,'')).map(cube=> {
        let greenCubes = 0
        let blueCubes = 0
        let redCubes = 0
        if (cube.includes("green")) {
           greenCubes += Number(cube.split('green')[0])
           if (greenCubes > 13) {
            return "false"
           }
        } else if (cube.includes("blue")) {
            blueCubes += Number(cube.split('blue')[0])
            if (blueCubes > 14 ) {
                return "false"
            }
        } else {
            redCubes += Number(cube.split('red')[0])
            if (redCubes > 12) {
                return "false"
            }
        }

        return {
            red: redCubes,
            green: greenCubes,
            blue: blueCubes
        }
    })}
})

const goodGamesSum = cleanData.filter(gameSet => !gameSet.gameData.includes("false")).map(gameSet => gameSet.id).reduce((acc, curr)=> acc + curr, 0)


// PART 2
const minSet = gamesData.map((game, i) => {
    return {id:i+1,
    gameData: game.split(":")[1].split(";").map(play=> play.split(",")).flat().map(cube=> cube.replace(/ /g,'')).map(cube=> {
    let greenCubes = 0
    let blueCubes = 0
    let redCubes = 0
    if (cube.includes("green")) {
       greenCubes += Number(cube.split('green')[0])
       
        return {green: greenCubes}
       
    } else if (cube.includes("blue")) {
        blueCubes += Number(cube.split('blue')[0])
        return {blue: blueCubes}
       
    } else {
        redCubes += Number(cube.split('red')[0])
        return {red: redCubes}
    }
    })}
})


const cubePowerSum = minSet.map(game => {
    const blueSet = game.gameData.filter(cube => Object.keys(cube).includes("blue") )
    const greenSet = game.gameData.filter(cube => Object.keys(cube).includes("green"))
    const redSet = game.gameData.filter(cube => Object.keys(cube).includes("red") )
    let minBlue = 0
    let minGreen = 0
    let minRed = 0
    blueSet.forEach(set => {
       set.blue && set.blue > minBlue ? minBlue = set.blue : null
    })
    greenSet.forEach(set => {
      set.green &&  set.green > minGreen ? minGreen = set.green : null
    })
    redSet.forEach(set => {
      set.red &&  set.red > minRed ? minRed = set.red : null
    })
    return minBlue * minGreen * minRed
}).reduce((acc, curr)=> acc + curr, 0)


  return  (
  <section className='max-w-3xl mx-auto'>
  <h1 className='text-xl py-4'>Puzzle</h1>
  <a href="https://adventofcode.com/2023/day/2">Link to the Puzzle</a>
<h1 className='text-xl py-4'>Data</h1>
<pre className='max-w-5xl overflow-scroll'>{`${gamesData}`}</pre>
<h1 className='text-xl py-4'>Code</h1>
<pre><code className='font-mono bg-green-900 text-[#EEE]'>
{`    const file = await fs.readFile(process.cwd() + '/public/input-day2.txt', 'utf8');
    const gamesData = file.split('\n')
   

    //PART 1
const cleanData = gamesData.map((game, i) => {
    return {id:i+1,
    gameData: game.split(":")[1].split(";").map(play=> play.split(",")).flat().map(cube=> cube.replace(/ /g,'')).map(cube=> {
        let greenCubes = 0
        let blueCubes = 0
        let redCubes = 0
        if (cube.includes("green")) {
           greenCubes += Number(cube.split('green')[0])
           if (greenCubes > 13) {
            return "false"
           }
        } else if (cube.includes("blue")) {
            blueCubes += Number(cube.split('blue')[0])
            if (blueCubes > 14 ) {
                return "false"
            }
        } else {
            redCubes += Number(cube.split('red')[0])
            if (redCubes > 12) {
                return "false"
            }
        }

        return {
            red: redCubes,
            green: greenCubes,
            blue: blueCubes
        }
    })}
})

const goodGamesSum = cleanData.filter(gameSet => !gameSet.gameData.includes("false")).map(gameSet => gameSet.id).reduce((acc, curr)=> acc + curr, 0)


// PART 2
const minSet = gamesData.map((game, i) => {
    return {id:i+1,
    gameData: game.split(":")[1].split(";").map(play=> play.split(",")).flat().map(cube=> cube.replace(/ /g,'')).map(cube=> {
    let greenCubes = 0
    let blueCubes = 0
    let redCubes = 0
    if (cube.includes("green")) {
       greenCubes += Number(cube.split('green')[0])
       
        return {green: greenCubes}
       
    } else if (cube.includes("blue")) {
        blueCubes += Number(cube.split('blue')[0])
        return {blue: blueCubes}
       
    } else {
        redCubes += Number(cube.split('red')[0])
        return {red: redCubes}
    }
    })}
})


const cubePowerSum = minSet.map(game => {
    const blueSet = game.gameData.filter(cube => Object.keys(cube).includes("blue") )
    const greenSet = game.gameData.filter(cube => Object.keys(cube).includes("green"))
    const redSet = game.gameData.filter(cube => Object.keys(cube).includes("red") )
    let minBlue = 0
    let minGreen = 0
    let minRed = 0
    blueSet.forEach(set => {
        set.blue > minBlue ? minBlue = set.blue : null
    })
    greenSet.forEach(set => {
        set.green > minGreen ? minGreen = set.green : null
    })
    redSet.forEach(set => {
        set.red > minRed ? minRed = set.red : null
    })
    return minBlue * minGreen * minRed
}).reduce((acc, curr)=> acc + curr, 0)

 `}
</code></pre>
</section>
)
}
