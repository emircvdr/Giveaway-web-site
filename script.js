const button = document.getElementById("cekilis-yap");
const close = document.getElementById("close");
button.addEventListener("click", () => {
  var textArea = document.getElementById("text-area").value;
  satir = textArea.split("\n");
  satir = satir.filter(function (satir) {
    return satir.trim() !== "";
  });
  var rastgeleIndeks = Math.floor(Math.random() * satir.length);
  if (textArea === "") {
    alert("Lutfen Katilimci Giriniz");
  }

  console.log("kazanan" + satir[rastgeleIndeks]);
  window.alert(`Cekilişi Kazanan kişi ${satir[rastgeleIndeks]}`);
});

close.addEventListener("click", () => {
  var textArea = document.getElementById("text-area").value;
  let textAreaSil = (document.getElementById("text-area").value = "");
});
