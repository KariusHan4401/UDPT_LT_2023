import HttpUtility from './HttpUtility'

export const pay = (data) => {
  return HttpUtility.post('localhost:8080', data)
}
