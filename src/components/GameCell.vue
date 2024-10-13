<script setup lang="ts">
import { useFieldStore } from '@/stores/field'
const props = defineProps<{
  x: number
  val: number
}>()

const field = useFieldStore()
const styles = ['empty', 'black', 'red', 'black-highlight', 'red-highlight']
</script>

<template>
  <div
    class="cell"
    @click="field.makeMove(props.x)"
    @mouseover="field.highlight(props.x)"
    @mouseleave="field.highlight(props.x, true)"
  >
    <div :class="'empty ' + styles[props.val]"></div>
  </div>
</template>

<style>
.cell {
  display: inline-block;
  margin: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #fff2d7;
  border: 1px solid gray;
}

.empty {
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  background-color: #fff2d7;
}

.red {
  background-color: rgb(255, 63, 63);
  border: 2px solid #fff2d7;
  animation: 0.2s 1 normal grow;
}

.black {
  background-color: #57534f;
  border: 2px solid #fff2d7;
  animation: 0.2s 1 normal grow;
}

.red-highlight {
  background-color: rgb(253, 139, 139);
  border: 4px solid #fff2d7;
}

.black-highlight {
  background-color: #77675b;
  border: 4px solid #fff2d7;
}

@keyframes grow {
  0% {
    scale: 50%;
  }

  to {
    scale: 100%;
  }
}
</style>
