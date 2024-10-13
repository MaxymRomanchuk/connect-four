<script setup lang="ts">
import { useFieldStore } from '@/stores/field'

const field = useFieldStore()
</script>

<template>
  <div class="d-flex flex-column justify-content-between side-bar">
    <div class="info-panel">
      <h4>Game info:</h4>
      <p>Turn: #{{ field.turnCount + 1 }}</p>
      <p>Player: {{ field.currentTurn }}</p>
    </div>
    <div class="info-panel">
      <h4>Actions:</h4>
      <button type="button" class="btn-action btn my-2" @click="field.$reset()">
        Restart
      </button>
    </div>
  </div>
</template>

<style>
.side-bar {
  min-width: 200px;
  height: 100%;
}

.info-panel {
  font-size: large;
  text-align: center;
  color: #6f4e37;
}

.btn-action {
  background-color: #8b6448 !important;
  color: #fff2d7 !important;
}
</style>
