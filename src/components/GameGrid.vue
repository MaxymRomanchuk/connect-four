<script setup lang="ts">
import { useFieldStore } from '@/stores/field'
import GameCell from './GameCell.vue'

const field = useFieldStore()
</script>

<template>
  <div class="grid">
    <GameCell
      v-for="(i, id) in field.fieldGrid"
      :key="id"
      :x="id % 7"
      :val="i"
    />
  </div>
</template>

<style>
.grid {
  min-width: 492px;
  width: 492px;
  background-color: #8b6448;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
