let contract;
let signer;
let contractWithSigner;

main();

async function main() {

    // if (!window.ethereum) {
    //     alert("No Web3 Provider detected");
    //     return;
    // }

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    // add your code below this line


    // 배경색을 무작위로 변경하는 함수
    function changeBackgroundColor() {
        var body = document.body;
        var randomColor = getRandomColor();
        body.style.backgroundColor = randomColor;
    }

    // 무작위 색상을 생성하는 함수
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 배경색을 초기화하는 함수
    function resetBackgroundColor() {
        var body = document.body;
        body.style.backgroundColor = '#ffffff'; // 원하는 초기 배경색으로 수정
    }

    // 초기 배경색 설정
    resetBackgroundColor();

    // 5초에 한 번씩 배경색 변경
    setInterval(changeBackgroundColor, 5000);


    // JavaScript 코드
    // 무작위 폰트 크기를 생성하는 함수
    function getRandomFontSize(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 무작위 색상을 생성하는 함수
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 마우스 이벤트 핸들러
    document.addEventListener('mousemove', function (event) {
        var textElements = document.querySelectorAll('.floating-text');
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        textElements.forEach(function (textElement) {
            var textX = parseFloat(textElement.style.left);
            var textY = parseFloat(textElement.style.top);
            var distance = Math.sqrt(Math.pow(mouseX - textX, 2) + Math.pow(mouseY - textY, 2));

            // 마우스와 텍스트 간의 거리가 일정 이하면 텍스트를 이동시킴
            if (distance < 100) {
                var angle = Math.atan2(mouseY - textY, mouseX - textX);
                var speed = 5;
                var offsetX = Math.cos(angle) * speed;
                var offsetY = Math.sin(angle) * speed;
                textElement.style.left = textX + offsetX + 'px';
                textElement.style.top = textY + offsetY + 'px';
            }
        });
    });

    // 입력 필드 이벤트 핸들러
    document.getElementById('textInput').addEventListener('input', function () {
        var text = this.value;
        var textElement = document.getElementById('text');

        // 텍스트 스타일 적용
        textElement.style.fontSize = getRandomFontSize(16, 200) + 'px';
        textElement.style.color = getRandomColor();

        // 텍스트를 동그라미 모양으로 커지며 사라지도록 애니메이션 적용
        textElement.innerText = text;
        textElement.style.animation = 'circleEffect 1s ease-out';

        // 애니메이션 종료 후 애니메이션 속성 초기화
        textElement.addEventListener('animationend', function () {
            textElement.style.animation = 'none';
        });

        // 입력한 내용을 떠다니는 텍스트로 추가
        addFloatingText(text);
    });

    // 어플리케이션 바로가기 기능 추가
    function openApp(url) {
        // 크롬에서 URL 열기
        window.open(url, '_blank');
    }


    // 떠다니는 텍스트를 추가하는 함수
    function addFloatingText(text) {
        var floatingText = document.createElement('div');
        floatingText.className = 'floating-text';
        floatingText.style.left = Math.random() * window.innerWidth + 'px';
        floatingText.style.top = Math.random() * window.innerHeight + 'px';
        floatingText.innerText = text;
        floatingText.style.fontSize = getRandomFontSize(16, 200) + 'px';
        floatingText.style.color = getRandomColor();
        document.body.appendChild(floatingText);

        // 15초 후에 텍스트를 서서히 사라지게 함
        setTimeout(function () {
            var opacity = 1;
            var fadeInterval = setInterval(function () {
                if (opacity <= 0) {
                    clearInterval(fadeInterval);
                    document.body.removeChild(floatingText);
                } else {
                    opacity -= 0.02;
                    floatingText.style.opacity = opacity;
                }
            }, 100);
        }, 15000);
    }

    // 무작위 크기를 생성하는 함수
    function getRandomSize() {
        return Math.floor(Math.random() * (100 - 20 + 1)) + 20; // 크기 범위를 조정하세요
    }

    // 무작위 이미지 생성 및 애니메이션 함수
    function createRandomImage() {
        var imageElement = document.createElement('png');
        imageElement.src = ''; // 이미지 파일의 경로를 입력하세요
        imageElement.className = 'floating-image';
        var randomSize = getRandomSize();
        imageElement.style.width = randomSize + 'px';
        imageElement.style.height = randomSize + 'px';

        // 무작위 배경 색 설정
        var randomColor = getRandomColor();
        imageElement.style.backgroundColor = randomColor;

        // 이미지를 화면 전체에 무작위 위치에 배치
        var maxX = window.innerWidth - randomSize;
        var maxY = window.innerHeight - randomSize;
        var randomX = Math.random() * maxX;
        var randomY = Math.random() * maxY;
        imageElement.style.left = randomX + 'px';
        imageElement.style.top = randomY + 'px';

        // 이미지를 body에 추가
        document.body.appendChild(imageElement);

        // 애니메이션 종료 후 이미지 제거
        imageElement.addEventListener('animationend', function () {
            document.body.removeChild(imageElement);
        });
    }

    // 이미지 생성 및 폭발 이벤트 설정
    document.getElementById('textInput').addEventListener('input', function () {
        createRandomImage();
    });

    // 폭발 함수
    function explode() {
        var textElements = document.querySelectorAll('.floating-text');
        textElements.forEach(function (textElement) {
            // 텍스트가 폭발하는 애니메이션을 추가
            textElement.style.animation = 'explodeText 0.5s';
            textElement.style.opacity = 0;
            setTimeout(function () {
                document.body.removeChild(textElement);
            }, 500);
        });

        var imageElements = document.querySelectorAll('.floating-image');
        imageElements.forEach(function (imageElement) {
            // 이미지가 폭발하는 애니메이션을 추가
            imageElement.style.animation = 'explodeImage 0.5s';
            imageElement.style.opacity = 0;
            setTimeout(function () {
                document.body.removeChild(imageElement);
            }, 500);
        });

        resetGauge();
    }

    // 게이지 초기화 함수
    function resetGauge() {
        gaugeValue = 0;
        updateGauge();
    }

    // 게이지 업데이트 함수
    function updateGauge() {
        var percentage = (gaugeValue / maxGaugeValue) * 100;
        gauge.style.width = percentage + '%';

        if (gaugeValue === maxGaugeValue) {
            explode();
        }
    }

    // 게이지 증가 이벤트
    document.getElementById('textInput').addEventListener('input', function () {
        if (gaugeValue < maxGaugeValue) {
            gaugeValue++;
            updateGauge();
        }
    });


    var gauge = document.querySelector('.gauge');
    var gaugeValue = 0;
    var maxGaugeValue = 140; // 140번 입력하면 게이지가 다 차도록 수정

    // 게이지 너비를 업데이트하는 함수
    function updateGauge() {
        var percentage = (gaugeValue / maxGaugeValue) * 100;
        gauge.style.width = percentage + '%';

        // 게이지가 가득 찼을 때 폭발을 트리거합니다
        if (gaugeValue === maxGaugeValue) {
            explode();
        }
    }


    // 게이지를 초기화하는 함수
    function resetGauge() {
        gaugeValue = 0;
        updateGauge();
    }

    // 폭발 및 모든 텍스트 및 이미지를 제거하는 함수
    function explode() {
        var textElements = document.querySelectorAll('.floating-text');
        textElements.forEach(function (textElement) {
            // 텍스트가 폭발하는 애니메이션을 추가
            textElement.style.animation = 'explodeText 0.5s';
            textElement.style.opacity = 0;
            setTimeout(function () {
                document.body.removeChild(textElement);
            }, 500);
        });

        var imageElements = document.querySelectorAll('.floating-image');
        imageElements.forEach(function (imageElement) {
            // 이미지가 폭발하는 애니메이션을 추가
            imageElement.style.animation = 'explodeImage 0.5s';
            imageElement.style.opacity = 0;
            setTimeout(function () {
                document.body.removeChild(imageElement);
            }, 500);
        });

        resetGauge();
    }

    // 입력 필드 이벤트 핸들러
    document.getElementById('textInput').addEventListener('input', function () {
        if (gaugeValue < maxGaugeValue) {
            gaugeValue++;
            updateGauge();
        }
    });
}
