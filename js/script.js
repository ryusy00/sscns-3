history.scrollRestoration = "auto"

// 마우스 커서 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove',function(e) {
        // 마우스 위치에 따라 커서 아이콘 위치 업데이트
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
});

// 퀵 네비게이션 효과
$(function() {
    $('.menuBtn'). on('click', 
    function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#gnb').toggleClass('visible');
    });
});

// pc네비게이션
$(function() {
    var hideDelay = 300; // delay in milliseconds

    $('#menu > li').hover(function() {
        // Clear any existing hide timer
        clearTimeout($(this).data('hideTimer'));

        // Stop any ongoing animation and slide down the submenu
        $(this).find('.sub1').stop(true, true).slideDown();
    }, function() {
        var $submenu = $(this).find('.sub1');

        // Set a timer to slide up the submenu after a delay
        var hideTimer = setTimeout(function() {
            $submenu.stop(true, true).slideUp();
        }, hideDelay);

        // Store the timer in the data for this menu item
        $(this).data('hideTimer', hideTimer);
    });
});

// script.js
window.addEventListener('scroll', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.scrollY >= 1080) {
        sidebar.classList.add('visible');
    } else {
        sidebar.classList.remove('visible');
    }
});

document.querySelectorAll('.sidebar > ul > li > a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 메인배너 넘어갔을 때, 네비게이션 색상 변경 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('topBox');
    const bannerHeight = 1080; // 메인 배너 높이

    window.addEventListener('scroll', function() {
        if (window.scrollY > bannerHeight) { // 스크롤 위치가 메인 배너 높이 이상일 때
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// 메인배너 시간 업데이트
document.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        document.getElementById('current-time').textContent = formattedTime;
    }

    updateTime();
    setInterval(updateTime, 60000); // Update time every minute
});

// 솔루션 영역 요소 변환 애니메이션
document.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.screen li');
    const totalSlides = slides.length;

    document.getElementById('prev-btn').addEventListener('click', showPrevSlide);
    document.getElementById('next-btn').addEventListener('click', showNextSlide);

    function showPrevSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        slides[currentIndex].classList.add('active');
    }

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        slides[currentIndex].classList.add('active');
    }

    // Initialize the first slide as active
    slides[currentIndex].classList.add('active');
});

// 각 영역별 스크롤 시 fadeinUpdown 애니메이션
document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', function() {
        // 스크롤 위치
        var scrollPosition = window.scrollY;
        // 애니메이션을 시작할 위치
        var triggerPosition = document.getElementById('center-text').offsetTop - window.innerHeight;
        var triggerPosition2 = document.getElementById('business-wrap').offsetTop - window.innerHeight;
        var triggerPosition3 = document.getElementById('solution').offsetTop - window.innerHeight;
        var triggerPosition4 = document.getElementById('contact-wrap').offsetTop - window.innerHeight;
    
        if (scrollPosition > triggerPosition) {
            document.getElementById('center-text').classList.add('animates');
        }
        if (scrollPosition > triggerPosition2) {
            document.querySelector('#business-wrap > h2').classList.add('animated');
            document.getElementById('business-content-wrap').classList.add('animated');
        }
        if (scrollPosition > triggerPosition3) {
            document.querySelector('#solution > h2').classList.add('animated');
        }
        if (scrollPosition > triggerPosition4) {
            document.querySelector('#contact-wrap > h2').classList.add('animated');
            document.getElementById('profile').classList.add('animated');
            document.getElementById('contact-content').classList.add('animated2');
        }
    });
    
});