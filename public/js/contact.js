function submitData(event) {
    event.preventDefault

    // Mengambil data dari ID
    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value ;
    let phone = document.getElementById("phone").value ;
    let subject = document.getElementById("subject").value ;
    let message = document.getElementById("message").value ;

    // Pengkondisian
    if (name == '') {
        return alert('Nama harus di isi')
    }else if (email == '') {
        return alert('Email harus di isi')
    }else if (phone == '') {
        return alert('Nomor harus di isi')
    }else if (subject == '') {
        return alert('Subject harus di isi')
    }else if (message == '') {
        return alert('Message harus di isi')
    } ;

    let emailReceiver = "rizqyandriansyah617@gmail.com";

    let link = document.createElement('a') ;
    link.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak saya di nomor ${phone}`
    link.click() ;

    let dataPengirim = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(dataPengirim)

}