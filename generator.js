


const generatorDiv = document.querySelector('.generator');
const qrInput = generatorDiv.querySelector('.generator-form input');
const downloadBtn = generatorDiv.querySelector('.generator-btn .gene-link');


let qrImage = new QRCode(document.querySelector('.img'))

function makeCode(){
    let qrValue = document.querySelector('.generator-form input').value;
    if(!qrValue.trim()) return;

    qrImage.makeCode(qrValue);
    document.querySelector('.generator').classList.add('active');
}

const generateBtn = document.querySelector(".generator-form button")

generateBtn.addEventListener('click', makeCode)

const img = generatorDiv.querySelector('.img img');

downloadBtn.addEventListener('click', () => {
    imgURL = img.src;
    console.log(imgURL);
    if(!imgURL) return;
    fetchImage(imgURL);
    
})

function fetchImage(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempFIle = URL.createObjectURL(file);
        let file_name = 'QR Code';
        let extension = 'png';
        download(tempFIle, file_name, extension)
    })
    .catch(() => imgURL = '')
}

function download(tempFIle, file_name, extension){
    let a = document.createElement('a');
    a.href = tempFIle;
    a.download = `${file_name}.${extension}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
}

