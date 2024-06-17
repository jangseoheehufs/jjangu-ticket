function verifyInfo() {
    const coupon = document.getElementById('coupon').value;

    const storedUserInfo = localStorage.getItem('userInfo');
    if (!storedUserInfo) {
        alert('사용자 정보가 업로드되지 않았습니다.');
        return;
    }

    const lines = storedUserInfo.split('\n');
    let valid = false;

    for (const line of lines) {
        const fileCoupon = line.trim();
        if (fileCoupon === coupon.trim()) {
            valid = true;
            break;
        }
    }

    const resultDiv = document.getElementById('result');
    const accountInfoDiv = document.getElementById('accountInfo');

    if (valid) {
        resultDiv.textContent = "일치합니다.";
        accountInfoDiv.style.display = 'block';
    } else {
        resultDiv.textContent = "다시 입력해주세요.";
        accountInfoDiv.style.display = 'none';
    }
}
