export const destructCamelCaseString = (string) => {
  const arrString = [...string];
  const newArrString = [];
  arrString.forEach((char, index) => {
    if (char.charCodeAt(0) > 90) {
      newArrString.push(char);
    } else {
      index && newArrString.push("-");
      newArrString.push(char.toLowerCase());
    }
  });
  return newArrString.join("");
};

export function formatCurrency(amount) {
  // Chuyển số thành chuỗi và thêm dấu chấm làm ngăn cách hàng nghìn
  const formattedAmount = amount.toLocaleString("vi-VN");
  // Thêm ký hiệu đồng tiền "đ" vào cuối
  return `${formattedAmount}đ`;
}
