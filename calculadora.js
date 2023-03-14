<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Calculator</title>
  </head>
  <body>
    <h1>JavaScript Calculator</h1>
    <input type="text" id="num1" placeholder="Enter first number">
    <br><br>
    <input type="text" id="num2" placeholder="Enter second number">
    <br><br>
    <button onclick="add()">Add</button>
    <button onclick="subtract()">Subtract</button>
    <button onclick="multiply()">Multiply</button>
    <button onclick="divide()">Divide</button>
    <br><br>
    <input type="text" id="result" placeholder="Result">
    
    <script>
      function add() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var result = num1 + num2;
        document.getElementById("result").value = result;
      }
      
      function subtract() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var result = num1 - num2;
        document.getElementById("result").value = result;
      }
      
      function multiply() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var result = num1 * num2;
        document.getElementById("result").value = result;
      }
      
      function divide() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var result = num1 / num2;
        document.getElementById("result").value = result;
      }
    </script>
  </body>
</html>
