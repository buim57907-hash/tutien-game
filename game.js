let power = 0;
let realm = "Luyện Khí";

setInterval(() => {
  power += 1;
  document.getElementById("power").innerText = power;
}, 1000);

function breakthrough() {
  if (power >= 100) {
    realm = "Trúc Cơ";
    document.getElementById("realm").innerText = realm;
  } else {
    alert("Tu vi chưa đủ");
  }
}
