burger = document.querySelector('.burger')
hello = document.querySelector('.hello')
hello1 = document.querySelector('.hello1')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    hello1.classList.toggle('v-class-resp');
    hello.classList.toggle('h-nav-resp');
})