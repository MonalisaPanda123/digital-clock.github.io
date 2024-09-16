let is24HourFormat = false;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let period = '';

    if (!is24HourFormat) {
        period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    }

    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${period}`;
    document.getElementById('clock').textContent = timeString;
}

document.getElementById('toggleFormat').addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    document.getElementById('toggleFormat').textContent = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
    updateClock();
});

setInterval(updateClock, 1000);
updateClock();
