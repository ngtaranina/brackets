module.exports = function check(str, bracketsConfig) {
  let stack = [];

ArrayLength = bracketsConfig.length;
  for (let i = 0; i < str.length; i++) {
      let currentElement = str[i];
      topElement = stack[stack.length - 1]; 
      identificator = false;

          for (let k = 0; k < bracketsConfig.length; k++) {           
              if (currentElement === bracketsConfig[k][1]){           
                      identificator = true
                      if (currentElement === bracketsConfig[k][0]){  
                            if (topElement === bracketsConfig[k][0]) {
                                stack.pop(); 
                                break;
                                } 
                                else {
                                    stack.push(currentElement);
                                    break;
                                }

                      } else {
                        if (stack.length === 0) {
                          return (false); 
                        } 
                            else{ 
                                if (topElement === bracketsConfig[k][0]) {
                                    stack.pop(); 
                                    break;
                                    } 
                                    else {
                                        stack.push(currentElement);
                                        break;
                                    }
                            }
                    }
              } 
        }                                   
      if(!identificator) stack.push(currentElement); 
  }
return(stack.length === 0);
} 