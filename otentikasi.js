canst username = "dwi"
canst password ="12345678"

function auth(){
    let unserinput = document. getElementById('username').Value
    let passwordinput = document.getElementById('password').Value
    let Form = document.getElementById('from')

    if(unserinput) == username && passwordinput == password) {
        alert("login Berhasil!")
        Form.onsubmit()
    } else {
        alert("login Gagal!")

    }

}