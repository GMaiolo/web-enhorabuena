export const KEYS = Object.freeze({
  MODAL: {
    CLOSE: 'closeModal',
    OPEN_EXPENSES: 'openExpensesModal',
    OPEN_SALES: 'openSalesModal'
  },
  SALES: {
    POST: 'postSale',
    UPDATE: 'updateSales',
    GET: 'getSales',
    LOADING: 'salesLoading',
    LOADED: 'salesLoaded',
    ERROR: 'salesError'
  },
  EXPENSES: {
    POST: 'postExpense',
    UPDATE: 'updateExpenses',
    GET: 'getExpenses',
    LOADING: 'expensesLoading',
    LOADED: 'expensesLoaded',
    ERROR: 'expensesError'
  }
})
