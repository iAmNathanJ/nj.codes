export function leadingZero(int) {
  return int < 10
    ? `0${int}`
    : int;
}
