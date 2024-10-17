const display = document.querySelector('.value');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        try{
        if (item.dataset.button === 'C') {
            // Clear the display
            display.value = ''; // For input elements
            display.textContent = ''; // For other elements like div or span
        }
        
        else if(item.dataset.button==='CE')
            {
              let string =display.value;
              display.value=string.substr(0 ,string.length-1);
            } 
            else if(item.dataset.button==='=')
                {
                  if(display.value!==''){
                  display.value=eval(display.value); 
                  display.textContent = display.value;
                } }
        else {
            // Append the clicked button's value
            display.value += item.dataset.button; // For input elements
            display.textContent += item.dataset.button; // For other elements like div or span
        }
    }
    catch(err){
        display.value='invalid input';
        setTimeout(()=>(display.value=''),1000)    }
}
})
