
/*task 2 Lesson11 */

let password = prompt('enter your password')

let result1= 0;
let result2 = 0
if(password !=='1234'){
    

    for (let i =1; i < 3; i++){ 
        result1 = result1+1;
         password = prompt('enter password again');
         if (password ==='1234'){
            alert('welcome here');
        } result1 = 3;
        let pukCode = prompt('enter puk-code')  

        if (pukCode ==='1234'){
            alert('welcome')
        } else{
            for(let j = 1; j<3; j++){
              pukCode = prompt('enter puk-code');
                result2=result2+1;
                
                
                } result2 = 3;
            
                    alert('sorry. you are blocked')
            }}
                
            
        


    }else if(password === '1234'){
        alert('heeey')
    }

    