const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const input = line.split(' ').map(Number); // 입력된 문자열을 공백을 기준으로 나누고 숫자로 변환
  const a = input[0];
  const b = input[1];

  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
}).on('close', function () {
  process.exit();
});