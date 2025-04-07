<script setup>
import ExpenseForm from './components/ExpenseForm.vue'
import ExpenseList from './components/ExpenseList.vue'
</script>

<template>
  <div class="container">
    <header>
      <h1>Payment Tracker</h1>
    </header>
    <main>
      <ExpenseForm />
      <ExpenseList />
    </main>
  </div>
</template>

<style scoped>
:root {
  --color-heading: #fff;
  --color-background-soft: #1e1e1e;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 1rem;
  background: var(--color-background-soft);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Ensures the container is horizontally centered */
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
  width: 100%;
}
</style>
