'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let jumps = 0

  for (let i = 0; i < c.length;) { // ew
    if (canJumpNTimes(c, i, 2)) i = jump(i, 2)
    else i = jump(i, 1)
  }

  return jumps - 1 // remove extra jump for getting out of the array

  function canJumpNTimes(c, i, n) { return c[i + n] !== undefined && c[i + n] !== 1 }
  function jump(i, n) { jumps += 1; return i += n }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
