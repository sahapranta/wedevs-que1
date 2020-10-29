/**
 *
 * Without using any repetitive statements or
 * any looping constructs (for, while, do-while etc.)
 *
 */

/**
 * @param {Number} n
 * @param {String} message
 * @return {undefined}
 * @description console.log message n times
 */

function customPrint(n, message) {
  if (!n && !message) return;
  console.log(Array(n).fill(message).join("\n"));
};

customPrint(5, "Hello, World!");
