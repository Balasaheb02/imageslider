const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for (let i = 1; i < 5; i++) {
    let newImage = document.createElement('img');
    newImage.setAttribute ('src', 'images/pic' +  i + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
    })

}


