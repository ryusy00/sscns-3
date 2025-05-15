// 각 영역별 스크롤 시 fadeinUpdown 애니메이션
        document.addEventListener('DOMContentLoaded', function() {
            // 요소가 화면에 보이는지 여부를 체크하고 애니메이션 클래스 추가
            function checkAnimation() {
                var gTitle = document.getElementById('g-title');
                var gBox = document.getElementById('g-box');
                var dBox = document.getElementById('d-box');
                
                // 요소가 화면에 보일 때만 애니메이션 클래스 추가
                if (isElementInViewport(gTitle)) {
                    gTitle.classList.add('animate');
                }
                if (isElementInViewport(gBox)) {
                    gBox.classList.add('animate');
                }
                if (isElementInViewport(dBox)) {
                    dBox.classList.add('animate');
                }
            }
            
            // 요소가 화면에 보이는지 여부를 확인하는 함수
            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            // 초기 로드 시 애니메이션 체크
            checkAnimation();
            
            // 스크롤 이벤트 대신 resize 이벤트를 사용하여 화면 크기 변경 시 체크
            window.addEventListener('resize', checkAnimation);
        });
        document.addEventListener('DOMContentLoaded', () => {
            const yesButton = document.querySelector('.yes');

            yesButton.addEventListener('click', () => {
                window.location.href = 'public/files/2024 company-introduction.pdf';
            });
        });