export const calculate = (s) => {
  s = s.toUpperCase();
  console.log('Calculating...');
  const map = {};
  s.replaceAll(' ', '')
    .split('')
    .forEach((ch) => {
      if (map[ch]) map[ch] += 1;
      else map[ch] = 1;
    });

  const nonRepeating = (ch) => map[ch] === 1;
  const repeating = (ch) => map[ch] > 1;

  const set = new Set();
  s.split('').map((s) => set.add(s));

  return {
    repeating: Array.from(set).filter(repeating).join('\t') || 'None',
    nonRepeating: Array.from(set).filter(nonRepeating).join('\t') || 'None',
  };
};
