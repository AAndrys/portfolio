export function calculateYears(date) {
  const ageDifMs = Date.now() - date;
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
