const countdownElement = document.getElementById('timer');

const countdownDate = new Date().getTime() + 600000;

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Offer expired";
    }
}, 1000);

document.getElementById('showFormButton').addEventListener('click', function() {
    document.querySelector('.form-section').style.display = 'block';
});

setTimeout(function() {
    document.querySelector('.form-section').style.display = 'none';
}, 15000);

function showsidebar(){
    const sidebar = document.querySelector('.sidebar-content')
    sidebar.style.display = 'flex'
}
function closesidebar(){
    const sidebar = document.querySelector('.sidebar-content')
    sidebar.style.display = 'none'
}