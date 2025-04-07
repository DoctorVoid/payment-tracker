import { reactive } from 'vue'

export const state = reactive({
  expenses: [], // Shared state for expenses
})

export const addExpense = (expense) => {
  state.expenses.push(expense)
}