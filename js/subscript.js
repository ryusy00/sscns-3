// 마우스 커서 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');
    let cursorX = 0, cursorY = 0;
    let mouseX = 0, mouseY = 0;

    // 마우스 움직임에 따라 목표 위치 업데이트
    document.addEventListener('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    function animateCursor() {
        // 현재 커서 위치를 목표 위치로 부드럽게 이동
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;

        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    // 애니메이션 시작
    animateCursor();
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
$(function() {
    var hideDelay = 300; // delay in milliseconds

    $('#menu2 > li').hover(function() {
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


// 회사연혁 이미지 fade-in 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.stairs, .person1, .person2, .person3');
    let current = 0;

    function fadeInNext() {
        if (current < images.length) {
            images[current].style.opacity = 1;
            current++;
            setTimeout(fadeInNext, 1000); // 1초 동안 페이드인
        }
    }

    fadeInNext();
});

// 회사연혁 텍스트 fade-in 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    const histories = document.querySelectorAll('.history1, .history2, .history3, .history4');
    let current = 0;

    function fadeInNext() {
        if (current < histories.length) {
            histories[current].style.opacity = 1;
            current++;
            setTimeout(fadeInNext, 1000); // 1초 동안 페이드인
        }
    }

    fadeInNext();
});


// 사업소개 페이지 클릭 시, 요소 변환 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const controlButtons = document.querySelectorAll('.control-button');
    const contentWraps = document.querySelectorAll('.content-wrap');

    // 초기에 첫 번째 content-wrap을 보이도록 설정
    if (contentWraps.length > 0) {
        contentWraps[0].style.display = 'block';
        controlButtons[0].classList.add('active');
    }

    // 버튼 클릭 이벤트 설정
    controlButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // 모든 content-wrap 숨기기
            contentWraps.forEach(content => {
                content.style.display = 'none';
            });

            // 선택된 content-wrap 보이기
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
            // 모든 버튼의 active 클래스 제거
            controlButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // 클릭된 버튼에 active 클래스 추가
            button.classList.add('active');
        });
    });
});

// 사업소개 영역 fade-in 애니메이션
document.addEventListener("DOMContentLoaded", function() {
    const businessBox = document.querySelector("#business-box");

    // setTimeout을 사용하여 지연 후 opacity를 1로 변경합니다.
    setTimeout(() => {
        if (businessBox) {
            businessBox.style.opacity = 1;
        }
    }, 200); // 원하는 시간 (밀리초) 후에 opacity를 1로 설정합니다.
});


// 사업소개(si,os,ic) 영역 fade-in 애니메이션
document.addEventListener("DOMContentLoaded", function() {
    const boxes = ["#si-box", "#support-box", "#custom-box", "#db-box"];
    let delay = 300; // 초기 지연 시간 (밀리초)

    boxes.forEach((box, index) => {
        setTimeout(() => {
            const element = document.querySelector(box);
            if (element) {
                element.style.opacity = 1; // 직접 스타일 속성으로 투명도를 변경
            }
        }, delay * index); // 각 박스에 대한 지연 시간 증가
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const boxes = ["#ito-box", "#infra-box", "#app-box", "#se-box"];
    let delay = 300; // 초기 지연 시간 (밀리초)

    boxes.forEach((box, index) => {
        setTimeout(() => {
            const element = document.querySelector(box);
            if (element) {
                element.style.opacity = 1; // 직접 스타일 속성으로 투명도를 변경
            }
        }, delay * index); // 각 박스에 대한 지연 시간 증가
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const boxes = ["#isp-box", "#bpr-box", "#secure-box", "#recover-box"];
    let delay = 300; // 초기 지연 시간 (밀리초)

    boxes.forEach((box, index) => {
        setTimeout(() => {
            const element = document.querySelector(box);
            if (element) {
                element.style.opacity = 1; // 직접 스타일 속성으로 투명도를 변경
            }
        }, delay * index); // 각 박스에 대한 지연 시간 증가
    });
});

