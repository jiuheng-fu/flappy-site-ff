<template>
  <div class="home">
    <h1>Welcome to My Dev Experiment Site</h1>
    <p>This site demonstrates embedding an HTML5 game (Flappy Guy) from itch.io.</p>
    <router-link to="/flappy">▶ Play Flappy Guy</router-link>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
}
.home a {
  margin-top: 20px;
  color: #1e90ff;
  text-decoration: underline;
}
</style>
