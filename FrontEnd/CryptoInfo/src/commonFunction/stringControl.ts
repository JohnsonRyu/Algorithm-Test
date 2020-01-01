export function stringToLocale(str: string, digit?: number) {
  digit = typeof digit !== 'undefined' ? digit : 0 ;

  if(str === "0") return str;

  return Number(str).toLocaleString(
    undefined,
    { minimumFractionDigits: digit,
      maximumFractionDigits: digit
    })
}

export function numberToLocale(num: number, digit?: number) {
  digit = typeof digit !== 'undefined' ? digit : 0 ;

  if(num === 0) return "0";

  return num.toLocaleString(
    undefined,
    { minimumFractionDigits: digit,
      maximumFractionDigits: digit
    })
}