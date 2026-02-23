let input = document.getElementById('inputbox');//accesing input box
let buttons = document.querySelectorAll('button');//accessing button box

let string = "";//empty string to store button 
let arr = Array.from(buttons);// arr class he button variabel pass for all buttons
arr.forEach(button => {//arr funtion
    button.addEventListener('click', (e) => {//click toh e pass hota rhega
        if (e.target.innerHTML == "=") { //button pr click krege toh value anni chiye agar eqal hoga toh chlega 
            string = eval(string);//evaluate string it is an inbuilt funtion
            input.value = string;//press hoga toh input value dikhegi
        }
        else if (e.target.innerHTML == 'AC') { // all clear button toh kuch show nhii hoga bss input he dikhega
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {// string me se last wla digit haat jayega 
            string = string.substring(0, string.length - 1);//substring dega or exclude krke chlega
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;//koi or he toh string dikh jayegi agar 0 nhi he tohh i.e4,5,6
        }
    })
})