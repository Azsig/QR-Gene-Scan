const scannerDiv = document.querySelector('.scanner');
const camera = scannerDiv.querySelector('h1 .fa-camera');
const stopCam = scannerDiv.querySelector('h1 .fa-stop');

const form = scannerDiv.querySelector('.scanner-form');
const fileInput = form.querySelector('input');
const img2 = form.querySelector('img');
const video = form.querySelector('video');
const content = form.querySelector('.content');
const p = form.querySelector('p');

const textarea = scannerDiv.querySelector('.scanner-details textarea');
const copyBtn = scannerDiv.querySelector('.scanner-details .copy');
const closeBtn = scannerDiv.querySelector('.scanner-details .close');

form.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', e => {
    let file = e.target.files[0];
    if(!file) return;
    fetchRequest(file);
})

function fetchRequest(file){
    let formData = new FormData();
    formData.append('file', file);

    p.innerText = "Scanning QR Code..."

    fetch(`http://api.qrserver.com/v1/read-qr-code/`, {
        method: "POST", body: formData
    }).then(res => res.json()).then(result =>{
        let text = result[0].symbol[0].data;

        if(!text)
            return p.innerText = "Couldn't Scan QR Code";

        form.classList.add('active-img');

        img2.src = URL.createObjectURL(file);

        textarea.innerText = text;
    })
}

copyBtn.addEventListener('click', () => {
    let text = textarea.textContent;
    navigator.clipboard.writeText(text);
})

closeBtn.addEventListener('click', () => stopScan())

function stopScan(){
    p.innerText = "Upload QR Code to Scan"

    form.classList.remove('active-img')
}