module.exports = function check(str, bracketsConfig) {
  
  let isBalanced = true;

  // Функция записать конфигурацию скобок в одномерный массив.
  function getConfigartion(arrBracketConfiguration) {

    let arrayBrackets = []; 

    for( let i = 0; i < arrBracketConfiguration.length; i++ ) {
      for( let j = 0; j < 2; j++ ) {
        arrayBrackets.push(arrBracketConfiguration[i][j]);
      }
    } 

    return arrayBrackets;
  }

  // Функция проверить скобки на баланс с учетом конфигурации. 
  function checkString(strWithBrackets){

    let bracketsStack = [];  

    for( charIndex = 0; charIndex < str.length; charIndex++) {

      // Если скобка открывающаяся, ее индекс кратен 2
      if( strWithBrackets.indexOf( str[charIndex] ) % 2 == 0 ) {
        bracketsStack.push( str[charIndex]); 

        let indexCurrentCharInConfig = strWithBrackets.indexOf( str[charIndex] );
        let isLastTwoBracketsSame = ( bracketsStack[bracketsStack.length - 1] == bracketsStack[bracketsStack.length - 2] ); 
        let isOpenCloseBracketsSame = strWithBrackets[indexCurrentCharInConfig] == strWithBrackets[indexCurrentCharInConfig + 1];

        if( isLastTwoBracketsSame && isOpenCloseBracketsSame ) {
          bracketsStack.pop(); 
          bracketsStack.pop();
        }
      }
      else {

        if(bracketsStack[bracketsStack.length - 1] == strWithBrackets[strWithBrackets.indexOf(str[charIndex]) - 1]) {
          bracketsStack.pop();
        } 
        else {
          isBalanced = false;
        }
      }
    }  

    if(bracketsStack.length > 0 ) {
      isBalanced = false;
    } 

    return isBalanced;     
  }
  // Если длинна str четна, то все открывающиеся скобки могут иметь закрывающую пару.
  if( str.length % 2 == 0 ) { 

     let bracketsArray = getConfigartion(bracketsConfig);
     checkString(bracketsArray);
  } 
  else {
    isBalanced = false;
  }

  return isBalanced;
}
