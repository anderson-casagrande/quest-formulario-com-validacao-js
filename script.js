const inputs = document.querySelectorAll('.obrigatorio')
const btn = document.getElementById('button')
const itemFormulario = document.querySelectorAll('.form-content')
console.log(inputs)
console.log(btn)
console.log(itemFormulario)


btn.addEventListener ('click', function(e){
e.preventDefault();

inputs.forEach((input,i) => {
if(input.value.trim() === ''){
itemFormulario[i].classList.remove('preenchido')   
itemFormulario[i].classList.add('error')
}else{
itemFormulario[i].classList.remove('error');
itemFormulario[i].classList.add('preenchido')    
}
}) 
})