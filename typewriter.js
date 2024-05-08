const sentence = 'hello there from lighthouse labs';

const typewriter = function(str) {
  let index = 0;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, index * 50);
    index++;
  }
  setTimeout(() => {
    console.log();
  }, str.length * 50);
};

typewriter(sentence);