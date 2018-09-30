import axios from 'axios'
import moment from 'moment'

const today = moment().format('DD-MM-YYYY')

const instance = axios.create({
  baseURL: 'https://enhorabuena.gmaiolo.com'
})

instance.interceptors.response.use(
  response => response.data,
  err => Promise.reject(err.response)
)

class Http {
  constructor (instance) {
    this.http = instance
  }

  getExpenses (date) {
    date = date || today
    return this.http('/expenses', { params: { date } })
  }

  postExpense (expense) {
    return this.http.post('/expenses', expense)
  }

  getSales (date) {
    date = date || today
    return this.http('/sales', { params: { date } })
  }

  postSale (sale) {
    return this.http.post('/sales', sale)
  }
}

export default new Http(instance)
