document.getElementById('btn1').addEventListener('click', function() {
    const images = [
        'Images/1.png', 
        'Images/2.png',
        'Images/3.png',
        'Images/4.png',
        'Images/5.png',
        'Images/6.png',
        'Images/7.png',
        'Images/8.png',
        'Images/9.png',
        'Images/10.png'
    ];

    const f = Math.floor(Math.random() * images.length);
    const img = images[f];

    const imageElement = document.getElementById('img-n');
    imageElement.src = img;
    imageElement.style.display = 'block';
});