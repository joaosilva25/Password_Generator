const maiusculo= document.querySelector(".checkbox_maiusculo");
const numero= document.querySelector(".checkbox_numbers");
const simbolos= document.querySelector(".checkbox_simbols")
const senha= document.querySelector('h4')

function aleatory() {
    let numbers=[0,1,2,3,4,5,6,7,,8,9,10]
    let words=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let lowerwords=words.map((n)=>
        n.toLowerCase());
    let simbols= ["@","#","_"]

    let numbers_aleatory= Math.floor(Math.random()*numbers.length);

    let letras= Math.floor(Math.random()*lowerwords.length);
        let convertWords= lowerwords[letras];

    let letras_ma= Math.floor(Math.random()*words.length);
        let convertWords_ma= words[letras_ma];

    let simbols_aleatory=Math.floor(Math.random()*simbols.length);
        let convertSimbols= simbols[simbols_aleatory];

    let password= `${convertWords}`;
    let password_number= `${numbers_aleatory}`; 
    let password2= `${numbers_aleatory}${convertWords_ma}${convertSimbols}`; 
    let password_simbol= `${convertSimbols}`; 

    senha.innerHTML=`<h4>${password}</h4>`

    if (maiusculo.checked) {
        senha.innerHTML=`<h4>${password2}</h4>`
    }

    else if (numero.checked) {
        senha.innerHTML=`<h4>${password_number}</h4>`	  
    }

    else if (simbolos.checked) { 
        senha.innerHTML=`<h4>${password_simbol}</h4>`	
    }

}

function bar() {

    let security_bar = document.querySelector('.bar_security_in');
    
    if ((maiusculo.checked || numero.checked || simbolos.checked) && !(maiusculo.checked && numero.checked) 
        && !(maiusculo.checked && simbolos.checked) && !(numero.checked && simbolos.checked)) {
            security_bar.style.width = "60%";
            security_bar.style.backgroundColor = "rgb(135, 255, 88)";

    } else if ((numero.checked && maiusculo.checked || numero.checked && simbolos.checked || maiusculo.checked && simbolos.checked ) && !(maiusculo.checked && numero.checked && simbolos.checked)) {
        security_bar.style.width = "80%";
        security_bar.style.backgroundColor = "rgb(118, 248, 66)";

    } else if (simbolos.checked && maiusculo.checked && numero.checked) {
        security_bar.style.width = "100%";
        security_bar.style.backgroundColor = "rgb(102, 255, 42)";
    }

    else if (!maiusculo.checked && !numero.checked && !simbolos.checked) {
        security_bar.style.width = "30%";
        security_bar.style.backgroundColor =  "rgb(255, 0, 0)";
    }
}



function caracteres() {
    let rangeText= document.querySelector("#range_text");
    let rangeBar = document.querySelector("#range");
    let valor= rangeBar.value;
    let formatvalue= parseFloat(valor);
    
    rangeText.innerHTML = `<p>${formatvalue}</p>`;
}


rangeBar.addEventListener('input', caracteres);
















