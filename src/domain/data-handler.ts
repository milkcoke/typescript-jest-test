import {createWriteStream} from 'fs'
import {join} from 'path'
import * as process from 'process'

export class DataHandler {
  private _data : any = 'Some dummy data for this demo app'

  generateReportData(): string {
    return this._data
  }

  async updateData<T>(data: T): Promise<void> {
    this._data = data
  }
  async storeData<T>(data: T): Promise<void> {
    const writeStream = createWriteStream(
      join(process.cwd(), 'data', 'data.txt'), {
        encoding: 'utf-8',
        flags: 'a'
      })

    if (!writeStream) throw new Error('Failed to make writeStream')
    writeStream.write(data + '\n')
    writeStream.end()
  }
}