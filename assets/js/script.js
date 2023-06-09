function dropdownMenu(){
    document.getElementById("dropdown__nav").classList.toggle("hide");

    
}
const whatsappBtn = document.getElementById('whatsapp__btn')
const whatsappNum = document.getElementById('whatsapp__num')

function togglePhoneNum(){
    whatsappBtn.classList.toggle('hide')
    whatsappNum.classList.toggle('hide')
    
    console.log('sucesso')
}

const qrBtn = document.getElementById('qr-btn')
const qr = document.getElementById('qr')

function toggleQrCode(){
    qrBtn.classList.toggle('hide')
    qr.classList.toggle('hide')

}

// const btnSubmit = document.getElementById('btn__submit')
// btnSubmit.addEventListener('click', window.location.href = "https://cldeqtn.github.io/Projeto-Final-Praxis/cadastro-sucesso.html")