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
  --color-background-soft: rgba(30, 30, 30, 0.9);
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #333;
  overflow: hidden;
  position: relative;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background-image: 
    url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Ctext x="10" y="50" font-size="40" fill="white"%3E%24%3C/text%3E%3C/svg%3E'),
    url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Ctext x="10" y="50" font-size="40" fill="white"%3E%E2%82%AC%3C/text%3E%3C/svg%3E'),
    url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Ctext x="10" y="50" font-size="40" fill="white"%3E%C2%A5%3C/text%3E%3C/svg%3E'),
    url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Ctext x="10" y="50" font-size="40" fill="white"%3E%C2%A3%3C/text%3E%3C/svg%3E');
  background-size: 100px 100px;
  background-repeat: repeat;
  opacity: 0.1;
  animation: move-diagonal 10s linear infinite;
  z-index: -1;
}

@keyframes move-diagonal {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-200px, -200px);
  }
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
  margin: 0 auto;
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
