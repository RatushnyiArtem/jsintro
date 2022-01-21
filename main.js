let first = document.getElementById('first_btn')
let info = document.getElementById('about_me')
let menu = document.getElementById('menu')
first.addEventListener('click',function(){
    info.style.left='0px'
    info.style.opacity='1'
    
    
})
let second = document.getElementById('secnd_btn')
let registration = document.querySelector('.login_wrap')
second.addEventListener('click', function(){
    registration.style.right='0px'
    registration.style.opacity='1'
    info.style.left='-388px'
    info.style.opacity='0'
})
let third = document.getElementById('third_btn')
third.addEventListener('click', function(){
    info.style.left='0px'
    info.style.opacity='1'
    info.style.background='url(./image/84347-utro-morskaya_ptica-spokojnyj-voshod_solnca-solnce-2560x1600.jpg) no-repeat'
    registration.style.background = 'url(https://cubiq.ru/wp-content/uploads/2020/02/Space.jpg) no-repeat'
    
});
let fourth = document.getElementById('fourth_btn')
let main = document.querySelector('.main_site')
fourth.addEventListener('click',function(){
    main.style.background='url(./image/Beautiful-universe-planets-stars-light_2560x1600.jpg)'
    main.style.backgroundSize = 'cover'
    main.style.backgroundPosition = 'fixed'
})

