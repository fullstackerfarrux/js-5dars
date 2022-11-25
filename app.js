let yozdi = +prompt("Son kriting");

for (i = 1; i <= yozdi; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

let kritildi = +prompt("Son kriting hammasi qoshiladi");

let s = 0;

for (i = 1; i <= kritildi; i++) {
  s = i + s;
}

console.log(s);
