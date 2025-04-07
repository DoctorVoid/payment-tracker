<script setup>
import { ref } from 'vue'
import { addExpense } from '../store/expenses.js'

const description = ref('')
const amount = ref('')
const currency = ref('USD') // Default currency
const currencies = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
  { code: 'INR', symbol: '₹' },
  { code: 'JPY', symbol: '¥' },
] // List of currencies

const handleAddExpense = () => {
  if (description.value && amount.value) {
    const selectedCurrency = currencies.find((cur) => cur.code === currency.value)
    addExpense({
      description: description.value,
      amount: parseFloat(amount.value),
      currency: currency.value,
      symbol: selectedCurrency.symbol,
    })
    description.value = ''
    amount.value = ''
    currency.value = 'USD'
  }
}
</script>

<template>
  <form @submit.prevent="handleAddExpense" class="expense-form">
    <div class="form-group">
      <label for="description">Description</label>
      <input
        id="description"
        v-model="description"
        type="text"
        placeholder="Enter expense description"
        required
      />
    </div>

    <div class="form-group amount-group">
      <label for="amount">Amount</label>
      <div class="amount-input-wrapper">
        <select v-model="currency" class="currency-select">
          <option v-for="cur in currencies" :key="cur.code" :value="cur.code">
            {{ cur.code }}
          </option>
        </select>
        <div class="amount-input-container">
          <span class="currency-symbol">
            {{ currencies.find((cur) => cur.code === currency)?.symbol }}
          </span>
          <input
            id="amount"
            v-model="amount"
            type="number"
            step="0.01"
            placeholder="0.00"
            required
          />
        </div>
      </div>
    </div>

    <button type="submit">Add Expense</button>
  </form>
</template>

<style scoped>
.expense-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}

.amount-group {
  display: flex;
  flex-direction: column;
}

.amount-input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.currency-select {
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
}

.amount-input-container {
  position: relative;
  flex: 1;
}

.currency-symbol {
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  font-size: 1rem;
  color: #555;
  pointer-events: none;
}

.amount-input-container input {
  padding: 0.5rem 0.5rem 0.5rem 2rem; /* Add padding to make space for the currency symbol */
}

button {
  padding: 0.75rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: hsla(160, 100%, 30%, 1);
}

@media (min-width: 768px) {
  .expense-form {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>