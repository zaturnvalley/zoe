function makeYears() {
  var arr = [];
  for (var i = 4; i <= 84; i++) {
    arr.push(i);
  }
  return arr;
}

const arrayOfYears = makeYears();

function makeNavYears() {
  for (var item of arrayOfYears) {
    console.log(item);
    let a = document.createElement("a");
    a.id = `${item}-years`;
    a.href = `./${item}years.html`;
    a.innerText = `${item} years`;

    document.getElementById("dropdown").appendChild(a);
  }
}

makeNavYears();


