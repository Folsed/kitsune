var countDownDate = new Date('Feb 19, 2024 18:09:00').getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Days counter
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (days < 100 && days > 10) { days = '0' + days }
    else
        if (days < 10) { days = '00' + days };


    // Hours counter
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) { hours = '0' + hours };

    // Minutes counter
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) { minutes = '0' + minutes };

    // Seconds counter
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));
    if (seconds < 10) { seconds = '0' + seconds };

    
    var time = `${days} <span>:</span> ${hours} <span>:</span> ${minutes} <span>:</span> ${seconds}`;
    document.querySelector('.countdown').innerHTML = time;

    if (distance < 0) { clearInterval(x); document.querySelector('.countdown').innerHTML = `000 <span>:</span> 00 <span>:</span> 00 <span>:</span> 00` }

}, 1000);