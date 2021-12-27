function time(counter) {
  let mm, ss;
  let output, b, c;
  b = counter % 60;
  c = Math.floor(counter / 60);
  mm = c;
  ss = b;
  if (b < 10) {
    ss = `0${b}`;
  }
  if (c < 10) {
    mm = `0${c}`;
  }
  return (output = `${mm}:${ss}`);
}

export default time;
