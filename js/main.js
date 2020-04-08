function sum(s) {
  var number = 0;

  function f(s){
    if(s) {
      number += s;
        return f;
    } else {
      return number;
    }
  }
  return f(s);
}

alert( sum(19)(52)(4)(24)(4)());