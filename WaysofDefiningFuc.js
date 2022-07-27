// There are three ways of defining functions in javascript 

// The traditional way or the normal way or the most comman way of definig a function/

                  function rollDice(){
                       var f = Math.floor(Math.random() * 6)+1;
                        document.write(f)
                   };

                  rollDice();

// Defining a function inside of a variable.

                  const square = function(num){
                            return num**2;
                  };

                  square(2);
                  
// The new one arrow method of deining a variable.
                    
                     const randomNum = () => {
                        return Math.floor(Math.random() * 20)+1;
                     };

                     randomNum();
