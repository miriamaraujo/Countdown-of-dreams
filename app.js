const countdown = () => {
    const countDate = new Date('Sep 17, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

}

setInterval(countdown, 1000);

// Dark mode

const moonPath =
    "M29 59C29 91.5848 59 118 59 118C26.4152 118 0 91.5848 0 59C0 26.4152 26.4152 0 59 0C59 0 29 26.4152 29 59Z";
const sunPath =
    "M118 59C118 91.5848 91.5848 118 59 118C26.4152 118 0 91.5848 0 59C0 26.4152 26.4152 0 59 0C91.5848 0 118 26.4152 118 59Z";
const darkMode = document.querySelector('#dark-mode');
let toggle = false;

darkMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    timeline.add({
            targets: ".sun",
            d: [{
                value: toggle ? sunPath : moonPath
            }]
        })
        .add({
            targets: ".sun",
            // rotate: 365

        }, "-= 600").add({
            targets: "section",
            backgroundColor: toggle ? "rgb(234, 235, 241)" : "rgb(21, 26, 32)",
        }, "-= 600").add({
            targets: ".day, .hour, .minute,.second",
            backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(29, 35, 43)",
            color: toggle ? "rgb(56, 67, 78)" : "rgb(197, 206, 218)"

        }, "-= 600").add({
            targets: "section, h2",
            color: toggle ? "rgb(56, 67, 78)" : "rgb(197, 206, 218)"

        }, "-= 600");
    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
});