import { parseISO, compareAsc } from "date-fns";

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
    return Math.floor(amount / 1000000) + `${dv ? "" : " triệu"}`;
  }
  return amount.toLocaleString("vi-VN");
}

export const compareDates = (date1: string, date2: string) => {
  const parsedDate1 = parseISO(date1);
  const parsedDate2 = parseISO(date2);
  return compareAsc(parsedDate1, parsedDate2);
};
export const getCurrentDate = () => {
  const tempDate = new Date();
  const year = tempDate.getFullYear();
  const month = String(tempDate.getMonth() + 1).padStart(2, "0");
  const day = String(tempDate.getDate()).padStart(2, "0");

  const currDate = `${year}-${month}-${day}`;
  return currDate;
};
