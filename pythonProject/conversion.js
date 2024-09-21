function convertToCentimeters() {
    const input = document.getElementById('chinese-measurement').value;
    const regex = /(\d+)尺(\d+)寸/;
    const matches = input.match(regex);

    if (matches) {
        const feet = parseInt(matches[1], 10);
        const inches = parseInt(matches[2], 10);
        const totalInches = feet * 10 + inches; // 1尺 = 10寸
        const centimeters = totalInches * 1 / 3; // 1寸 = 1/3厘米
        document.getElementById('centimeters-result').textContent = centimeters.toFixed(2);
    } else {
        document.getElementById('centimeters-result').textContent = '格式错误';
    }
}

function convertFromCentimeters() {
    const centimeters = parseFloat(document.getElementById('centimeters-input').value);
    const totalInches = centimeters * 3; // 厘米转寸
    const feet = Math.floor(totalInches / 10); // 寸转尺
    const inches = totalInches % 10; // 剩余的寸
    document.getElementById('chinese-measurement-result').textContent = feet + '尺' + inches + '寸';
}