document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if(scrollY > 45){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    });
    const footerDate = document.getElementById('footerDate');
    footerDate.innerText = new Date().getFullYear();

    document.getElementById('logo').addEventListener('click', () => {
        window.location.assign('/')
    });
});