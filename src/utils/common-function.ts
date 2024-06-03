export const chunkArray = (array: any, size: any) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
export const formatCurrency = (value: any) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

export function formatToMillion(amount: any, dv?: string) {
  if (amount >= 1000000) {
    return amount / 1000000 + `${dv ? "" : " triệu"}`;
  }
  return amount.toLocaleString("vi-VN");
}
