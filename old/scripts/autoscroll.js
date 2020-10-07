function init() {

    const scroll = new SmoothScroll('.header-links-elem a');
    const listenScroll = new SmoothScroll('.listen-button');
    
    const navEls = document.querySelectorAll('.header-links-elem a');
    const sections = [...document.querySelectorAll('.section-link')];
    const sectionLinks = [];

    sections.map((s) => {
        sectionLinks.push(s.id);
    });



    const maxSections = sectionLinks.length;
    let current = 0;
    let scrollSlide = 0;

    navEls.forEach((navEl) => {
        navEl.addEventListener('click', function () {
            changeNav(this);
        })
    });

    function changeNav(nav) {
        navEls.forEach(navEl => {
            navEl.classList.remove('active');
        })
        nav.classList.add('active');
    }

    function changeSection(sectionNumber) {
        const nextSection = document.getElementById(sectionLinks[sectionNumber]);

        console.log(nextSection);
        console.log(nextSection.id);
        scroll.animateScroll(nextSection);

        current = sectionNumber;
    }

    document.addEventListener('wheel', throttle(scrollChange, 500));
    document.addEventListener('touchmove', throttle(scrollChange, 500));

    function switchNavEl(sectionNumber) {
        const activeEl = navEls[sectionNumber]
        navEls.forEach(navEl => {
            navEl.classList.remove('active');
        })
        activeEl.classList.add('active');

    }

    function scrollChange(e) {
        if (e.deltaY > 0) {
            scrollSlide += 1;
        } else {
            scrollSlide -= 1;
        }
        if (scrollSlide > maxSections) {
            scrollSlide = maxSections - 1;
        }
        if (scrollSlide < -1) {
            scrollSlide = -1;
        }
        changeSection(scrollSlide);
        switchNavEl(scrollSlide);
        current = scrollSlide;
    }

    const listenBtn = document.querySelector('.listen-button');
    listenBtn.addEventListener('click', () => {
        listenScroll.animateScroll(document.getElementById('listen'));
        const link = [...document.querySelectorAll('.header-links-elem a')].filter((el) => { return el.href.indexOf('#listen') > -1 })[0]
        link.classList.add('active');
        
    })

}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

init();