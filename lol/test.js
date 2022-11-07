const n = 512;
let s = 0;

for (i = 1; i <= 512; i++) {
  let a = parseInt(n / i);

  s += a;
}

console.log(s);
