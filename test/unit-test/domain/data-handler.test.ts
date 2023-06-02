import {DataHandler} from '../../../src/domain/data-handler'
import {createWriteStream} from 'fs'
import fs from 'fs'


describe('DataHandler', ()=>{
  // replace all functions as empty function like spy functions

  const dataHandler = new DataHandler()
  test('fail - not exists store directory', ()=>{
    const spyFn = jest.spyOn(fs, 'createWriteStream')
    expect(dataHandler.storeData(5)).resolves.toBeUndefined()
    // mocks can replace functionality easily
    expect(spyFn).toBeCalled()
  })
})