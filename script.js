import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const imageDisplay = document.getElementById('imageDisplay');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseButtons = document.getElementById('responseButtons');

let noClickCount = 0;
const imagePaths = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.gif'
];
const noButtonTexts = [
    'Dili',
    'Oo, buot ka?',
    'Bad kayka :(',
    "sige pangluod",
    "ngano diay? >:D",
    "hilak dira"
];

noButton.addEventListener('click', () => {
    if (noClickCount < noButtonTexts.length - 1) {
        noClickCount++;
        imageDisplay.src = imagePaths[noClickCount];
        const scaleFactor = 1 + noClickCount * 0.1;
        yesButton.style.transform = `scale(${scaleFactor})`;
        noButton.textContent = noButtonTexts[noClickCount];
    }
});

yesButton.addEventListener('click', () => {
    imageDisplay.src = imagePaths[imagePaths.length - 1];
    valentineQuestion.innerHTML = 'Happy 1st Monthsary!!! <br> I love you :33';
    responseButtons.style.display = 'none';
    confetti();
});
