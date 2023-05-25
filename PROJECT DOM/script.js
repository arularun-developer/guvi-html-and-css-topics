   
         let output = document.getElementById('outputscreen');

         function calculate(){
            try{
                output.value=eval(output.value);
            }
            catch(error){
                alert('invaild ')
            }
         }

