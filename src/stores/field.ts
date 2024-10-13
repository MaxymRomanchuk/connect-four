import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { checkRow, checkColumn, checkDiagonal } from '@/utils/fieldChecker'

export const useFieldStore = defineStore('field', () => {
  const error = ref('')
  const output = ref('')
  const turnCount = ref(0)
  const gameFinished = ref(false)
  const fieldGrid = reactive([] as number[])
  const topFreeCell = reactive([] as number[])
  const currentTurn = computed(() => (turnCount.value % 2 ? 'Red' : 'Black'))

  // Fill arrays
  for (let i = 0; i < 42; i++) {
    fieldGrid.push(0)
  }
  for (let i = 35; i < 42; i++) {
    topFreeCell.push(i)
  }

  function $reset() {
    error.value = ''
    output.value = ''
    turnCount.value = 0
    gameFinished.value = false

    for (let i = 0; i < 42; i++) {
      fieldGrid[i] = 0
    }
    for (let i = 35; i < 42; i++) {
      topFreeCell[i - 35] = i
    }
  }

  function checkWin(cellNum: number) {
    if (turnCount.value == 41) {
      return handleOutput('', 2)
    }

    const player = (turnCount.value % 2) + 1
    const winnerExist =
      checkColumn(fieldGrid, cellNum % 7, player) ||
      checkRow(fieldGrid, Math.floor(cellNum / 7), player) ||
      checkDiagonal(fieldGrid, cellNum, player)

    return handleOutput('', winnerExist ? 1 : 0)
  }

  function handleOutput(errorMsg?: string, winner?: number) {
    if (errorMsg) {
      error.value = errorMsg
      return
    }

    if (winner) {
      if (winner == 1) {
        output.value = `${currentTurn.value} wins!`
      } else {
        output.value = 'It`s a draw!'
      }
      gameFinished.value = true
    }

    error.value = ''
    turnCount.value += 1
  }

  function makeMove(colNum: number) {
    if (gameFinished.value) {
      return
    }

    const cellNum = topFreeCell[colNum]
    if (cellNum < 0) {
      return handleOutput('This column is full already, try other column!')
    }

    fieldGrid[cellNum] = (turnCount.value % 2) + 1
    topFreeCell[colNum] -= 7
    checkWin(cellNum)
    return highlight(colNum)
  }

  function highlight(colNum: number, reverse = false) {
    const cellNum = topFreeCell[colNum]

    if (cellNum < 0 || gameFinished.value) {
      return
    }

    fieldGrid[cellNum] = reverse ? 0 : (turnCount.value % 2) + 3
  }

  return {
    output,
    error,
    currentTurn,
    fieldGrid,
    turnCount,
    makeMove,
    highlight,
    $reset,
  }
})
