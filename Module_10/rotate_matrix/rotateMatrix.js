const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];//establishes array for matrix

const mlen = 3; // matrix length
const tagArray = []; // handle on divs
let tag = document.getElementsByClassName("box");//ties tag to the box div
let len = tag.length;//sets to length to the number of boxes
for (let i = 0; i < len; i++) {//looping through tags to create full tag array
  tagArray[i] = tag.item(i); // get a handle on divs
  console.log(tag.item(i).innerText);//console logging the tag array and sub items
}
console.log(JSON.stringify(tag)); //stringifying tag array 
function map(i, j) {
  return 3 * j + i;
}
function toij(k) {
  i = k % 3;
  j = Math.floor(k / 3); // round down j
  return { i, j };
}
function writeToGrid(A) {
  tagArray.forEach((item, index) => {
    let res = toij(index);
    item.innerText = A[res.j][res.i];
  });
}

function transpose(A) {
  // we need only swap upper triangle with lower
  let N = A.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      swap(A, i, j, j, i);
    }
  }
}
function swap(A, i, j, k, l) {
  let temp = A[j][i];
  A[j][i] = A[l][k];
  A[l][k] = temp;
}
function exchangeCols(A) {
  // work in from outside
  let N = A.length; // we need only swap N/2 (rounded down)
  let n = Math.floor(N / 2); // round down to integer
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < N; row++) {
      swap(A, col, row, N - 1 - col, row);
    }
  }
}
function rotateMatrix(A) {
  transpose(A);
  exchangeCols(A);
}

writeToGrid(A);
transpose(A);
writeToGrid(A);
exchangeCols(A);
writeToGrid(A);
console.log(JSON.stringify(A));
