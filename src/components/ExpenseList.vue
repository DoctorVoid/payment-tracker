<script setup>
import { state } from '../store/expenses.js'
</script>

<template>
  <div class="expense-list">
    <h2>Expense History</h2>
    <ul>
      <li v-for="(expense, index) in state.expenses" :key="index">
        <span>{{ expense.description }}</span>
        <span>{{ expense.symbol }}{{ expense.amount.toFixed(2) }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.expense-list {
  margin-top: 2rem;
  width: 100%;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

li:last-child {
  border-bottom: none;
}

@media (min-width: 768px) {
  .expense-list {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>