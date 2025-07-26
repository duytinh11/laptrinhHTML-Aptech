if (confirm("Game lucky number")) {
    var s = prompt("Vui lòng nhập số của bạn từ 0 đến 99");
    s = parseInt(s);

    if ( s < 0 || s > 99) {
        alert("Số bạn nhập không hợp lệ. Vui lòng nhập số từ 0 đến 99.");
    } else {
        var r = Math.random(); // return number -> duoble/float 0->1 vd 0.12791
        r = r * 100; 
        r = parseInt(r);

        if (s === r) {
            alert("Chúc mừng! Bạn đã đoán đúng số may mắn: " + s);
        } else {
            alert("Rất tiếc! Bạn đã đoán sai. Số may mắn là: " + r);
        }
    }
} else {
    alert("Bạn hãy tham gia trò chơi.");
}
