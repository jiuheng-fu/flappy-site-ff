<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/flappy">Flappy Guy</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
body, html, #app {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.nav {
  background-color: #222;
  color: #fff;
  padding: 12px;
  text-align: center;
}

.nav a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
}
.nav a:hover {
  text-decoration: underline;
}
</style>
