const timeElement = document.querySelector('.time');

window.onload = function () {
    let time = window.performance.timing;
    timeElement.style.display = 'block';
    let preloading = (time.loadEventStart - time.navigationStart)/1000;
    timeElement.querySelector('span').textContent = preloading+"";
}
