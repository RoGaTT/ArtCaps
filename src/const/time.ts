// eslint-disable-next-line import/prefer-default-export
export const RELEASE_DATE = (() => {
  const buf = new Date(2021, 11, 11, 21, 0, 0, 0);
  // buf.setHours(buf.getHours() + 3);
  return buf;
})();
