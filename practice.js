var solveEquation = function(equation) {
    let [leftSide, rightSide] = equation.split('=');  
    let [leftNumbers, rightNumbers] = partNumbers(leftSide, true);
    let rightPartition = partNumbers(rightSide, false);
    leftNumbers = leftNumbers.concat(rightPartition[0]);
    if (leftNumbers.length === 0) leftNumbers = [0];
    leftNumbers = leftNumbers.reduce((a,b) => a + b);
    rightNumbers = rightNumbers.concat(rightPartition[1]);
    if(rightNumbers.length === 0) rightNumbers = [0];
    rightNumbers = rightNumbers.reduce((a,b) => a + b);
    
    
    if(leftNumbers === 0 && rightNumbers === 0){
        return 'Infinite solutions';
    }
    
    if(leftNumbers === 0 && rightNumbers != 0){
        return 'No solution';
    }
    
    if(leftNumbers > 1 || leftNumbers < 0){
        rightNumbers = rightNumbers/leftNumbers;
    }
    
    return `x=${rightNumbers}`;
    
    
    
    
    
   
    
   
};

function partNumbers(currentSide, left){
     let newVariableSide = [];
    let newNumberSide = [];
    let varMult = 1;
    let numMult = 1;
    if(left){
        numMult = -1;
    }else{
        varMult = -1;
    }
     let sign = '';
    let number = '1';
    let x = false;
     for(let i = 0; i < currentSide.length; i++){
         
         if(i === (currentSide.length - 1) || ((currentSide[i] === '-' || currentSide[i] === '+') && i > 0)){
             if(currentSide[i] === 'x') {
                 x = true;
             }
             if(parseInt(currentSide[i]) >= 0){
                 if(parseInt(currentSide[i - 1]) >= 0){
                number += currentSide[i];
            }else{
            number = currentSide[i];
            }
             }
             if(x){
                newVariableSide.push(varMult * parseInt(sign + number));
            }else{
                newNumberSide.push(numMult * parseInt(sign + number))
            }
            x = false;
            number = '1';
            sign = '';
        }
         
        if (currentSide[i] === 'x'){
            x = true;
        }else if(currentSide[i] === '-'){
            sign = '-';
        }else if(currentSide[i] === '+'){
            sign = '+';
        }else{
            if(parseInt(currentSide[i - 1]) >= 0){
                number += currentSide[i];
            }else{
            number = currentSide[i];
            }
        }
        
        
    }
    return [newVariableSide, newNumberSide];
}
