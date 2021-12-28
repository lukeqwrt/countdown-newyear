const countDown = () => {
    const countDate = new Date("Jan 01, 2022 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerText = textDay    
    document.querySelector('.hour').innerText = textHour    
    document.querySelector('.minute').innerText = textMinute    
    document.querySelector('.second').innerText = textSecond    

    if(textDay <= 0 && textHour <= 0 && textMinute <= 0 && textSecond <= 0){
        document.querySelector('.coming-soon').style.display = "none"
    }
}
setInterval(countDown, 1000)
countDown();
