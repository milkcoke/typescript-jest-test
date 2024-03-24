import {
  readFileSync,
  createReadStream
} from 'fs'
import {createInterface} from 'readline'

function parseNdJson(filePath: string): void {
  const ndjsonStream = createReadStream(filePath, {
    encoding: 'utf-8'
  })

  const readLine = createInterface({
    input: ndjsonStream,
    crlfDelay: Infinity
  })

  console.time('parse ndjson')
  readLine.on('line', (line: string)=>{
    JSON.parse(line)
  })

  readLine.on('close', ()=>{
    console.timeEnd('parse ndjson')
    console.log('NDJson parsing is complete')
  })
}


function parseJSONArray(filePath: string): void {
  const jsonArray = readFileSync(filePath, {
    encoding: 'utf-8'
  })

  try {
    console.time('parse array')
    JSON.parse(jsonArray)
    console.timeEnd('parse array')
  } catch (e) {
    console.error('Error parsing JSON:', e)
  }
}

// parseNdJson('./people.ndjson')
parseJSONArray('./people.json')
