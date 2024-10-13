<script setup lang="ts">
import { useFieldStore } from '@/stores/field'

const field = useFieldStore()
</script>

<template>
  <h3 class="text-danger" v-if="field.error">Error: {{ field.error }}</h3>
  <h3 v-if="field.output">{{ field.output }}</h3>
</template>

<style scoped></style>
