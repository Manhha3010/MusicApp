export function getAudioTimeString(seconds) {
  const h = parseInt(seconds / (60 * 60));
  const m = parseInt((seconds % (60 * 60)) / 60);
  const s = parseInt(seconds % 60);

  return h
    ? `${h < 10 ? '0' + h : h}:`
    : '' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}
