import hello from './hello'

describe('hello', () => {
  it('should return a greeting for a given name', () => {
    expect(hello('Chuck Norris')).toEqual('Hello Chuck Norris!')
  })

  it('should return the default greeting when called without a name', () => {
    expect(hello()).toEqual('Hello friend!')
  })
})
