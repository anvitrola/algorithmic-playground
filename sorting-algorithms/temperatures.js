function computeClosestToZero(ts) {
  if (!ts.length) return 0;

  let positiveClosestToZero = null;
  let negativeClosestToZero = null;

  for (let i = 0; i < ts.length; i++) {
    if (ts[i] > 0) {
      if (!positiveClosestToZero) {
        positiveClosestToZero = ts[i];
      } else if (ts[i] < positiveClosestToZero) {
        positiveClosestToZero = ts[i];
      }
    }

    if (ts[i] < 0) {
      if (!negativeClosestToZero) {
        negativeClosestToZero = ts[i];
      } else if (ts[i] > negativeClosestToZero) {
        negativeClosestToZero = ts[i];
      }
    }
  }

  return Math.abs(negativeClosestToZero) < Math.abs(positiveClosestToZero)
    ? negativeClosestToZero
    : positiveClosestToZero;
}
