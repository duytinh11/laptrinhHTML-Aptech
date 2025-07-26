
var luckyNumber = Math.random();
luckyNumber = luckyNumber * 100;
luckyNumber = parseInt(luckyNumber);


const sodudoan = prompt("Nhập số bạn dự đoán (0 - 99):");
sodudoan = parseInt(sodudoan);


if (sodudoan < 0 || sodudoan > 99) {
  alert("Số bạn nhập không hợp lệ! Vui lòng nhập số từ 0 đến 99.");
} else {
  var sotiendautu = prompt("Nhập số tiền bạn muốn đầu tư (đơn vị: VND):");
  sotiendautu = parseFloat(sotiendautu);

  if (sotiendautu || sotiendautu) <= 0 {
    alert("Số tiền đầu tư không hợp lệ!");
  } else {
    if (sodudoan === luckyNumber) {
      var tienthuong = sotiendautu * 70;
      alert("Chúc mừng! Bạn đã đoán đúng số may mắn" +luckyNumber);
      alert("Số tiền bạn thắng được là" +tienthuong);
    } else {
      alert("Rất tiếc! Số may mắn là" +luckyNumber);
      alert("bạn đã đoán là" +sodudoan);
    }
  }
}
