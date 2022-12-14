function printHearts(count) {
  let star = "";

  if (count > 0) {
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < i + 1; j++) {
        star += "♡";
      }
      console.log(star);
      star = "";
    }
  } else {
    count *= -1;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count - i; j++) {
        star += "♡";
      }
      console.log(star);
      star = "";
    }
  }
}

printHearts(2);
console.log("-----");
printHearts(5);
console.log("-----");
printHearts(-4);
