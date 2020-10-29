# Que: 1

Without using any repetitive statements or any looping constructs (for, while, do-while etc.),

please complete the following function’s body:

```javascript
function customPrint(n, message) {
    //  Add your code here
}
```



**Solution:**

```javascript
function customPrint(n, message) {
  if (!n && !message) return;
  console.log(Array(n).fill(message).join("\n"));
};

// Output
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
```