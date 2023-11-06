function makeYears() {
  var arr = [];
  for (var i = 4; i <= 84; i++) {
    arr.push(i);
  }
  return arr;
}

const arrayOfYears = makeYears();

function makeNavYears() {
  const rootDomain = document.location.pathname.includes("birthday")
    ? ""
    : `/birthdays`;
  for (var item of arrayOfYears) {
    let a = document.createElement("a");
    a.id = `${item}-years`;
    a.href = `.${rootDomain}/${item}years.html`;
    a.innerText = `${item} years`;

    document.getElementById("dropdown").appendChild(a);
  }
}

makeNavYears();
