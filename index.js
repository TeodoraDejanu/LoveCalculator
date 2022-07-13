function changeText(id) {
  var procentLove = Math.random();
  procentLove = procentLove * 100;
  procentLove = Math.floor(procentLove) + 1;
  if (procentLove > 70) {
    id.innerHTML = "Your love score is " + procentLove + " %" + " You love each other like Kanye loves Kanye";
  }
  if (procentLove > 30 && procentLove <= 70) {
    id.innerHTML = "Your love score is " + procentLove + " %";
  }
  if (procentLove <= 30) {
    id.innerHTML = "Your love score is " + procentLove + " %" + " You go together like oil and water";
  }
}

function refreshPage() {
  window.location.reload();
}
