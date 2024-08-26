function gantinama() {
  var name = prompt("Masukkan Nama Anda:", "");
  document.getElementById("name").innerHTML = name;
}

gantinama();

document.getElementById("ganti").addEventListener("click", function () {
  gantinama();
});

function setSenderUI(nama, tanggal, jk, pesan) {
  document.getElementById("sender-name").innerHTML = nama;
  document.getElementById("sender-date").innerHTML = tanggal;
  document.getElementById("sender-jk").innerHTML = jk;
  document.getElementById("sender-message").innerHTML = pesan;
}

function validateForm() {
  const nama = document.forms["message-form"]["nama"].value;
  const tanggal = document.forms["message-form"]["tanggal"].value;
  const jk = document.forms["message-form"]["jk"].value;
  const pesan = document.forms["message-form"]["pesan"].value;

  if (nama === "" || tanggal === "" || jk === "" || pesan === "") {
    alert("Tidak Boleh Kosong");
    return false;
  }

  setSenderUI(nama, tanggal, jk, pesan);
  return false; // Prevent form from submitting in the traditional way
}
