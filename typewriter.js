const sentence = 'hello there from lighthouse labs';

let index = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, index * 1000)
  index++;
};
