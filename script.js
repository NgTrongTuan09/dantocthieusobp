const images = [
    'url("12_1.png")',
    'url("12_2.png")',
    'url("12_3.png")',
    'url("12_4.png")',
    'url("12_5.png")',
    'url("12_6.png")',
    'url("12_7.png")',
    'url("12_8.png")',
    'url("12_9.png")',
    'url("12_10.png")',
    'url("12_11.png")',
    'url("12_12.png")',
    'url("12_13.png")'

];

let currentIndex = 0;
const header = document.querySelector('header');

function changeBackgroundImage() {
    header.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Chuyển sang hình tiếp theo, quay lại hình đầu tiên khi hết
}

// Thay đổi hình nền mỗi 5 giây (5000 milliseconds)
setInterval(changeBackgroundImage, 3500);