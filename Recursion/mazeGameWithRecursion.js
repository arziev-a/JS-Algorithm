const m = [
  [1, 1, 1, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 0],
  [1, 1, 1, 1],
];

function mazeSolver(matrix) {
  const visited = [];
  let found = false;
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[0].length; j++) {
      row.push(0);
    }
    visited.push(row);
  }

  function move(row, col) {
    if (found) console.log(row, col);

    if (row === matrix.length - 1 && col === matrix[row].length - 1) {
      found = true;
      return;
    }
    if (found) return;
    visited[row][col] = 1;
    if (
      col < matrix[row].length - 1 &&
      matrix[row][col + 1] === 1 &&
      !visited[row][col + 1]
    )
      move(row, col + 1);
    if (
      row < matrix.length - 1 &&
      matrix[row + 1][col] === 1 &&
      !visited[row + 1][col]
    )
      move(row + 1, col);
    if (col > 0 && matrix[row][col - 1] === 1 && !visited[row][col - 1])
      move(row, col - 1);
    if (row > 0 && matrix[row - 1][col] === 1 && !visited[row - 1][col])
      move(row - 1, col);
  }
  move(0, 0);
  console.log(visited);
  return found;
}

console.log(mazeSolver(m));
