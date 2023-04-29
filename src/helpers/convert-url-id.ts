export const convertUrlToID = (url: string) => {
  return url.replace(/^\D+/g, '');
};
