let string = "";
let buttons = document.querySelectorAll('span');
Array.from(buttons).forEach((span) => {
    span.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('#screen').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('#screen').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "Code_Rahul"
            document.querySelector('#screen').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('#screen').value = string;
        }
    })
})
