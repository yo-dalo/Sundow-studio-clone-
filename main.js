var phone_nav = document.querySelector('.phone_nav');
var line = document.querySelectorAll('.mb_nav_line');
var on = false;
var mb_screen = document.querySelector('.mb_screen');


phone_nav.addEventListener('click', () => {
    if (on == true) {
        on = false;
        phone_nav.style.gap = '2.5vw';
        line.forEach((e) => {
            e.style.position = 'relative';
            e.style.right = '0';

        })
        // line[0].style.transform='rotate(45deg)';
        // line[2].style.transform='rotate(-45deg)';
        gsap.to(line[0], {
            rotate: 0,
        })








        gsap.to(line[2], {
            transform: 'rotate(0deg)',

        })

        gsap.to(mb_screen, {
            top: '102vh',
            borderRadius: '100%',

        })





        line[1].style.display = 'block';

    } else {

        on = true;
        phone_nav.style.gap = 0;
        line.forEach((e) => {
            e.style.position = 'fixed';
            e.style.right = '8vw';

        })

        // line[0].style.transform='rotate(45deg)';
        // line[2].style.transform='rotate(-45deg)';
        line[1].style.display = 'none';
        gsap.to(line[0], {
            transform: 'rotate(45deg)',
        })

        gsap.to(line[2], {
            transform: 'rotate(-45deg)'
        })

        gsap.to(mb_screen, {
            top: 0,
            borderRadius: '0',


        })






    }

})