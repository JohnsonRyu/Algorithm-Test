export function stringToLocale(str: string, digit?: number) {
  digit = typeof digit !== 'undefined' ? digit : 0 ;

  if(str === "0") return str;

  return Number(str).toLocaleString(
    undefined,
    { minimumFractionDigits: digit,
      maximumFractionDigits: digit
    })
}