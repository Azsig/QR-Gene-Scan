

const generatorDiv = document.querySelector('.generator');
const generateBtn = generatorDiv.querySelector(".generator-form button");
const qrInput = generatorDiv.querySelector('.generator-form input');
const qrImg = generatorDiv.querySelector('.generator-img img');
const downloadBtn = generatorDiv.querySelector('.generator-btn .gene-link');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue.trim()) return;   // if value is empty stop

    generateBtn.innerText = 'Generating QR Code...'
    // if the value valid -> using qrserver api to generate QR code
    imgURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.src = imgURL;
    qrImg.addEventListener('load', () => {
        generatorDiv.classList.add('active');
        generateBtn.innerText = 'Generate QR Code'
    })
})

downloadBtn.addEventListener('click', () => {
    if(!imgURL) return;
    fetchImage(imgURL);
})

function fetchImage(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempFIle = URL.createObjectURL(file);
        let file_name = url.spl
    })
}