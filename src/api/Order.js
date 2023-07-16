import HttpUtility from './HttpUtility'

// const BASE_API = process.env.BASE_HOST

export const pay = (data) => {
  // return HttpUtility.post(`${BASE_API}/paypal-pay`, data)
  return HttpUtility.post('http://localhost:8080/paypal-pay', data)
}

export const test = () => {
  // return HttpUtility.get(`${BASE_API}/text`)
  return HttpUtility.get('http://localhost:8080/text')
}
