let delay = 0;
let i = 0;
while (i < 10) {
  setTimeout(() => {
    process.stdout.write(`\r|🙈   `);
  }, delay);
  setTimeout(() => {
    process.stdout.write('\r/🙉   ');
  }, delay + 100);
  setTimeout(() => {
    process.stdout.write('\r-🙊   ');
  }, delay + 200);
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\ 🙊  '); 
  }, delay + 300);
  delay += 400
  i++;
}

// ... fill in the rest yourself ...



//process.stdout.write('hello from spinner1.js... \rheyyy\n');
