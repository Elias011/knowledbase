function balancedBrackets(expression) {
  let s = [];
  expression = expression.split('');
  let result = []

  for (let c = 0; c < expression.length; c++) {
    if (expression[c] === '{') {
      s.push('}');
    } else if (expression[c] === '[') {
      s.push(']');
    } else if (expression[c] === '(') {
      s.push(')');
    } else {
      if ((s.length === 0) || expression[c] !== s[s.length - 1]) {
        result.push("No")
      } else {
        result.push("Yes");
        s.pop();
      }

    }
  };
  if (result.includes("No")) {
    console.log("No")
  } else {
    console.log("Yes")
  }

}

balancedBrackets("({(){}[]})[]", "[]]]")