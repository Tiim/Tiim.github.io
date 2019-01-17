export default (array, size = 5) => {
  if (size <= 0) {
    return [array];
  }

  return array.reduce((t, n, i) => {
    const chunk = Math.floor(i / size);
    t[chunk] = t[chunk] || [];
    t[chunk].push(n);
    return t;
  }, []);
};
