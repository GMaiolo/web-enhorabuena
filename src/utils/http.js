import axios from 'axios'
import moment from 'moment'

const today = moment().format('DD-MM-YYYY')

const instance = axios.create({
  baseURL: 'https://enhorabuena.gmaiolo.com'
})

class Http {
  constructor (instance) {
    this.http = instance
  }

  getExpenses (date = today) {
    return this.http('/expenses', { params: { date } })
      .then(({ data: expenses }) => expenses)
  }

  postExpense (expense) {
    return this.http.post('/expenses', expense)
  }

  getSales (date = today) {
    return this.http('/sales', { params: { date } })
      .then(({ data: sales }) => sales)
  }

  postSale (sale) {
    return this.http.post('/sales', sale)
  }
}

export default new Http(instance)
