export function numberWithDot(x: string) {
  if (x !== undefined) {
    return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
  } else {
    return x;
  }
}

export function numberWithComa(x: string) {
  if (x !== undefined) {
    return x.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return x;
  }
}
