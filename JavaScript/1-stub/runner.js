'use strict';

const start = (tests) => {
  let failed = 0;
  const count = tests.length;
  const runNext = () => {
    if (tests.length === 0) {
      console.log(`Total: ${count}; Failed: ${failed}`);
      process.exit(failed > 0 ? 1 : 0);
    }
    const test = tests.shift();
    console.log(`Started test: ${test.name}`);
    test((err) => {
      if (err) {
        failed++;
        console.log(`Failed test: ${test.name}`);
        console.log(err);
      } else {
        console.log(`Finished test: ${test.name}`);
      }
      setTimeout(runNext, 0);
    });
  };
  runNext();
};

module.exports = { start };
