<script setup lang="ts">
import GameGrid from './components/GameGrid.vue'
import InfoPanel from './components/InfoPanel.vue'
import OutputPanel from './components/OutputPanel.vue'
</script>

<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center page-bg"
  >
    <h1 id="heading">Connect 4 game!</h1>
    <div class="d-flex flex-wrap justify-content-center container-bg">
      <GameGrid />
      <InfoPanel />
    </div>
    <OutputPanel />
  </div>
</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}

#heading {
  color: #6f4e37;
}

.container-bg {
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ecb176;
}

.page-bg {
  width: 100%;
  height: 100%;
  background-color: #fff2d7;
}
</style>
