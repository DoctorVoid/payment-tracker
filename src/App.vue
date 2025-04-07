<script setup>
import ExpenseForm from './components/ExpenseForm.vue'
import ExpenseList from './components/ExpenseList.vue'
</script>

<template>
  <header>
    <h1>Payment Trackers</h1>
  </header>

  <main>
    <ExpenseForm />
    <ExpenseList />
  </main>
</template>

<style scoped>
:root {
  --color-heading: #333;
  --color-background-soft: #f9f9f9;
  --color-border: #ddd;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  color: var(--color-heading);
}

main {
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background: var(--color-background-soft);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  main {
    max-width: 600px;
  }
}
</style>
