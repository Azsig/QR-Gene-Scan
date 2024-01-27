


const generatorDiv = document.querySelector('.generator');
const qrInput = generatorDiv.querySelector('.generator-form input');
const downloadBtn = generatorDiv.querySelector('.generator-btn .gene-link');


let qrImage = new QRCode(document.querySelector('.img'))

let img;

function makeCode(){
    let qrValue = document.querySelector('.generator-form input').value;
    if(!qrValue.trim()) return;

    qrImage.makeCode(qrValue);
    document.querySelector('.generator').classList.add('active');

    img = generatorDiv.querySelector('.img img');
    console.log(img);

    setTimeout(link,1000)

    
}

function link(){
    imgURL = img.getAttribute('src');
    console.log(imgURL);
    if(!imgURL) return;
    fetchImage(imgURL);
}

const generateBtn = document.querySelector(".generator-form button")

generateBtn.addEventListener('click', makeCode)

 


function fetchImage(url){
   
        let tempFIle = url;
        let file_name = 'QR Code';
        let extension = 'png';
        download(tempFIle, file_name, extension)
}

function download(tempFIle, file_name, extension){
    let a = document.querySelector('.generator-btn a');
    a.href = tempFIle;
    a.download = `${file_name}.${extension}`;
}

