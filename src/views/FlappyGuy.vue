<template>
  <div class="game-wrapper">
    <h1>Flappy Guy Demo</h1>
    <iframe
      src="https://html-classic.itch.zone/html/8571974/index.html"
      allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
      allowtransparency="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      msallowfullscreen="true"
      frameborder="0"
      allowfullscreen="true"
      scrolling="no"
    ></iframe>
    <p class="credit">Game: Flappy Guy by Ricozz — hosted on itch.io</p>
  </div>
</template>

<style scoped>
.game-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 20px;
}

iframe {
  width: 960px;
  height: 540px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
}

.credit {
  margin-top: 10px;
  font-size: 14px;
  color: #aaa;
}

@media (max-width: 768px) {
  iframe {
    width: 100%;
    height: 70vh;
  }
}
</style>
