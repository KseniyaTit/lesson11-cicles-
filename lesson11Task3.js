
 function numbers(num1, num2){
     for(let i=num1; i<=num2; i++){
        
        
   if (i > 100){
       if (i % 2===0 && Math.sign(i)===1 && i % 1=== 0){
        alert( i +`:введенное вами число больше 100, четное, положительное ,недробное`)
    }
    if ( i % 2 !==0 && Math.sign(i)===1 && i % 1=== 0){
    alert( i +`:введенное вами число больше 100, нечетное целое положительное недробное`)
    }
    if (i % 2 !==0 && Math.sign(i)===1 && i % 1 !== 0){
    alert(i +`:введенное вами число больше 100, нечетное недробное положительное`)
    }
    if ( i % 2 ===0 && Math.sign(i)===1 && i % 1!== 0){
    alert( i+ `:введенное вами число больше 100, положительное, четное, дробное`)
    }
} else if (i < 100){
 
    if ( i % 2 !==0 && Math.sign(i)===1 && i % 1=== 0){
    alert(i +` :введенное вами число меньше 100, нечетное положительное недробное`)
    }
    if ( i % 2 ===0 && Math.sign(i)===1 && i % 1=== 0){
    alert(i +` :введенное вами число меньше 100, четное положительное недробное`)
    }
    if (i % 2 ===0 && Math.sign(i) ===1 && i % 1 !== 0){
        alert(i +` :введенное вами число меньше 100, четное положительное дробное`)
        }
    if (i % 2 !==0 && Math.sign(i) ===-1 && i % 1=== 0){
            alert(i + ` :введенное вами число меньше 100, нечетное положительное дробное`)
            }
    if (i % 2 ===0 && Math.sign(i) ===-1 && i % 1=== 0){
            alert(i + ` :введенное вами число меньше 100, четное  отрицательное недробное`)
         }
    if (i % 2 !==0 && Math.sign(i) ===-1 && i % 1=== 0){
    alert(i + ` :введенное вами число меньше 100, нечетное отрицательное недробное`)
    }
    if (i % 2 ===0 && Math.sign(i) ===-1 && i % 1 !== 0){
        alert(i +` :введенное вами число меньше 100, четное отрицательное дробное`)
        }
     if (i % 2 !==0 && Math.sign(i) ===-1 && i % 1=== 0){
            alert( i +`:введенное вами число меньше 100, нечетное отрицательное дробное`)
            }
        }
     }
     
 }