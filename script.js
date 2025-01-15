let display = document.getElementById('display');


function appendValue(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}


function calculateResult() {
    try {
        
        let result = display.value
            .replace('sin', 'Math.sin')
            .replace('cos', 'Math.cos')
            .replace('tan', 'Math.tan')
            .replace('log', 'Math.log')
            .replace('sqrt', 'Math.sqrt')
            .replace('exp', 'Math.exp')
            .replace('pi', 'Math.PI')
            .replace('**2', '**2');

      
        display.value = eval(result);
    } catch (error) {
        display.value = 'Error'; 
}
