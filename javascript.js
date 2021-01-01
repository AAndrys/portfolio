function stylesdisplay() {
    let text = document.querySelectorAll('.textload');
    const button = document.getElementById('buttondownload');
    const aboutmep = document.getElementById('aboutmep');

    text[0].style.opacity = "1";
    text[1].style.opacity = "1";
    text[2].style.opacity = "1";
    button.style.opacity = "1";

    text[0].style.transform = "translateY(0)";
    text[1].style.transform = "scale(1)";
    text[2].style.transform = "translateY(0)";
}

function show() {
    let icon = document.querySelectorAll('.socialbox');
    let social = document.querySelectorAll('#socialp');

    icon[0].addEventListener('click', () => {
        social[0].style.visibility = "visible";
        social[0].style.opacity = "1";
    });
    icon[1].addEventListener('click', () => {
        social[1].style.visibility = "visible";
        social[1].style.opacity = "1";
    });
    icon[2].addEventListener('click', () => {
        social[2].style.visibility = "visible";
        social[2].style.opacity = "1";
    });


}

function scroll() {
    const aboutmep = document.getElementById('aboutmep');
    const fixedp = document.getElementById('fixedp');
    
    document.addEventListener('scroll', () => {
        currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
        if(window.innerWidth <= 600)
        {
            if(currentScroll == 10)
            {
                aboutmep.style.opacity = "1";
                aboutmep.style.transform = "translateX(0)";
            }
            if(currentScroll < 16)
            {
                fixedp.innerHTML = "1";
            }
            if (currentScroll >= 16 && currentScroll < 40) {
                fixedp.innerHTML = "2";
            }
            if (currentScroll >= 40 && currentScroll <= 90) {
                fixedp.innerHTML = "3";
            }
            if (currentScroll > 90) {
                fixedp.innerHTML = "4";
            }
        }
        else 
        {
            if (currentScroll == 23) {
                aboutmep.style.opacity = "1";
                aboutmep.style.transform = "translateX(0)";
            }
            if (currentScroll < 23) {
                fixedp.innerHTML = "1";
            }
            if (currentScroll >= 55 && currentScroll < 80) {
                fixedp.innerHTML = "2";
            }
            if (currentScroll >= 80 && currentScroll <= 90) {
                fixedp.innerHTML = "3";
            }
            if (currentScroll > 90) {
                fixedp.innerHTML = "4";
            }
        }
    });
}

function toggle() {
    const respheader = document.querySelector('.responsiveheader');
    const exit = document.querySelector('.exit');
    const menu = document.querySelector('.rmenu');
    const li = document.querySelectorAll('#rli');
    let helper = 0;

    let zm = respheader.style.transform = "translateX(0%)";
    let zm1 = respheader.style.transform = "translateX(100%)";
        li[0].addEventListener('click', () => {
            respheader.style.transform = "translateX(100%)";
            document.body.style.overflowY = "";
        });
        li[1].addEventListener('click', () => {
            respheader.style.transform = "translateX(100%)";
            document.body.style.overflowY = "";
        });
        li[2].addEventListener('click', () => {
            respheader.style.transform = "translateX(100%)";
            document.body.style.overflowY = "";
        });
        li[3].addEventListener('click', () => {
            respheader.style.transform = "translateX(100%)";
            document.body.style.overflowY = "";
        });
        exit.addEventListener('click', () => {
            helper = 0;
            respheader.style.transform = "translateX(100%)";
            console.log(helper);
            if (helper == 1) {
                document.body.style.overflowY = "hidden";
            }
            else if (helper == 0) {
                document.body.style.overflowY = "";
            }
        });
        menu.addEventListener('click', () => {
            helper = 1;
            respheader.style.transform = "translateX(0%)";
            console.log(helper);
            if (helper == 1) {
                document.body.style.overflowY = "hidden";
            }
            else if (helper == 0) {
                document.body.style.overflowY = "";
            }
        });
}

function start() {
    stylesdisplay();
    show();
    scroll();
    toggle();
}

document.onload = start();
