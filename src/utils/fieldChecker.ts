export function checkRow(grid: number[], row: number, player: number) {
  let counter = 0
  for (let i = row * 7; i < (row + 1) * 7; i++) {
    if (grid[i] == player) {
      counter++
    } else {
      counter = 0
    }

    if (counter == 4) {
      break
    }
  }

  return counter > 3 && 'Row win'
}

export function checkColumn(grid: number[], column: number, player: number) {
  let counter = 0
  for (let i = column; i < 42; i += 7) {
    if (grid[i] == player) {
      counter++
    } else {
      counter = 0
    }

    if (counter == 4) {
      break
    }
  }

  return counter > 3 && 'Col win'
}

export function checkDiagonal(
  grid: number[],
  position: number,
  player: number,
) {
  // Check ascending
  let descending = 0
  let startingPoint = (position % 7) - Math.floor(position / 7)
  if (startingPoint < 0) {
    startingPoint = Math.abs(startingPoint) * 7
  }
  for (let i = startingPoint; i < 42; i += 8) {
    if (grid[i] == player) {
      descending++
    } else {
      descending = 0
    }

    if (descending == 4 || (i + 1) % 7 == 0) {
      break
    }
  }

  let ascending = 0
  // Find row which would start ascending line
  const leftAllign = (position % 7) + Math.floor(position / 7)
  startingPoint = leftAllign > 5 ? 35 + leftAllign - 5 : leftAllign * 7
  for (let i = startingPoint; i > 0; i -= 6) {
    if (grid[i] == player) {
      ascending++
    } else {
      ascending = 0
    }

    if (ascending == 4 || (i + 1) % 7 == 0) {
      break
    }
  }

  return (
    (descending > 3 && 'Descending win') || (ascending > 3 && 'Ascending win')
  )
}
