 function tambah() {
    let angka1 = document.getElementById("angka1").value
    let angka2 = document.getElementById("angka2").value
    
    if(angka1 === "" || angka2 === "") {
      document.getElementById("hasil").innerText = "Hasil: angka harus diisi!"
    return;
    } else {
      let angka1Num = Number(angka1)
      let angka2Num = Number(angka2)
      let hasil = angka1Num + angka2Num
      document.getElementById("hasil").innerHTML = "Hasil: " + hasil
    }
  }
  
  function kurang() {
    let angka1 = document.getElementById("angka1"). value
    let angka2 = document.getElementById("angka2").value
    
    if(angka1 === "" || angka2 === "") {
      document.getElementById("hasil").innerHTML = "Hasil: angka harus diisi!"
    return;
    } else{
    let angka1Num = Number(angka1)
      let angka2Num = Number(angka2)
      let hasil = angka1Num - angka2Num
      document.getElementById("hasil").innerHTML = "Hasil: " + hasil
    }
}
  
  function bagi() {
    let angka1 = document.getElementById("angka1"). value
    let angka2 = document.getElementById("angka2").value
    
    if(angka1 === "" || angka2 === "") {
      document.getElementById("hasil").innerHTML = "Hasil: angka harus diisi!"
    }
    let angka1Num = Number(angka1)
    let angka2Num = Number(angka2)
    if (angka2Num === 0) {
      document.getElementById("hasil").innerHTML = "Hasil: tidak bisa dibagi dengan 0"
    return;
    } else{

    let hasil = angka1Num / angka2Num
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil
    }
  }
  
  function kali() {
    let angka1 = document.getElementById("angka1"). value
    let angka2 = document.getElementById("angka2").value
    
    if(angka1 === "" || angka2 === "") {
      document.getElementById("hasil").innerHTML = "Hasil: angka harus diisi!"
  } else {
     let angka1Num = Number(angka1)
    let angka2Num = Number(angka2)
    let hasil = angka1Num * angka2Num
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil
  }
  }
  
  function clear() {
    document.getElementById("angka1").value = ""
    document.getElementById("angka2").value = ""
    document.getElementById("hasil").innerHTML = "Hasil:"
  }
  document.getElementById("tambah").addEventListener("click", tambah)
  
  document.getElementById("kurang").addEventListener("click", kurang)
  
  document.getElementById("bagi").addEventListener("click", bagi)
  
  document.getElementById("kali").addEventListener("click", kali)
  
  document.getElementById("clear").addEventListener("click", clear)
