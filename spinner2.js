let delay = 0;
let i = 0;
const show = {show0: [`\r|🙈   `, `\r|🙈   `, '\r-🙊   ', '\r\\🙊  '],
              delay0: 100};
while (i < 10) {
  show.show0.forEach( item => {
    setTimeout(() => {
      process.stdout.write(item);
    },show.delay0 + delay);
    delay += 100;
  });
  delay += show.show0.length * 50;
  i++;
}
