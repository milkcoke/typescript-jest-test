import axios from 'axios'

// same to jest.mock('axios') and use it here
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockedResponse = {
  status: 201,
  statusText: 'Created',
  data: {
    test: 'data', id: 101
  }
}

mockedAxios.request = jest.fn().mockResolvedValue(mockedResponse)

describe('axios mocking', ()=>{
  const reqUrl = 'https://jsonplaceholder.typicode.com/posts'
  const testData = {test: 'data'}
  it('success - dummy post', async ()=>{
    const res = await mockedAxios.request({
      url: reqUrl,
      method: 'POST',
      data: testData,
      timeout: 5000
    })
    console.dir(res)
  })

  it('success - mocking post', async ()=>{
    // Arrange & Act
    const res = await mockedAxios.request({
      url: reqUrl,
      method: 'POST',
      data: testData,
      timeout: 5000
    })

    // Assertion
    expect(res).toEqual(mockedResponse)
  })
})
