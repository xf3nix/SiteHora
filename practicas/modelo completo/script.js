function cargar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png' // Bom Dia!
        document.body.style.background = '#e6dbd5'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png' // Boa Tarde!
        document.body.style.background = '#fd690c'
    }  else {
        img.src = 'noite.png'// Boa Noite!
        document.body.style.background = '#2a385a'
    }    
}