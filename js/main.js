const seriesFilmes = document.getElementById('seriesFilmes')
const series = document.getElementById('series')
const filmes = document.getElementById('filmes')
const google =  document.querySelector("#google")
const face =  document.querySelector("#face")

let btn = document.querySelector("#btn")


let nome = document.querySelector("#nome")
let labelNome =  document.querySelector("#labelNome")
let validNome = false

let user = document.querySelector("#user")
let labelUser =  document.querySelector("#labelUser")
let validUser = false

let password = document.querySelector("#password")
let labelSenha=  document.querySelector("#labelSenha")
let validSenha = false

let password1 = document.querySelector('#password1')
let labelConfirmar=  document.querySelector("#labelConfirmar")
let validConfirma = false


let loginBox1 =  document.querySelector('#loginBox1')
let loginBox2 =  document.querySelector('#loginBox2')
let loginBox3 =  document.querySelector('#loginBox3')
let loginBox4 =  document.querySelector('#loginBox4')


let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')


// FUNÇÕES ABAIXO SÃO PARA VERIFICAR SE NA TELA DE CADASTRO FORAM COLOCADAS AS INFORMAÇÕES CORRETAS
if (nome){
nome.addEventListener('keyup', ()=>{
    if(nome.value.length <=2){
        labelNome.setAttribute('style','color:red')
        labelNome.innerHTML = "*Insira no minimo 3 caracteres"
        loginBox1.setAttribute('style','border-color:red')
        validNome=false
    } else{
        labelNome.setAttribute('style','color:green')
        labelNome.innerHTML = 'Nome'
        loginBox1.setAttribute('style','border-color:green')
        validNome=true
    }
})

user.addEventListener('keyup', ()=>{
    if(user.value.length <=4){
        labelUser.setAttribute('style','color:red')
        labelUser.innerHTML = "*Insira no minimo 5 caracteres"
        loginBox2.setAttribute('style','border-color:red')
        validUser=false
    } else{
        labelUser.setAttribute('style','color:green')
        labelUser.innerHTML = 'Usuário'
        loginBox2.setAttribute('style','border-color:green')
        validUser=true
    }
})

password.addEventListener('keyup', ()=>{
    if(password.value.length <=5){
        labelSenha.setAttribute('style','color:red')
        labelSenha.innerHTML = "*Insira no minimo 6 caracteres"
        loginBox3.setAttribute('style','border-color:red')
        validSenha=false
    } else{
        labelSenha.setAttribute('style','color:green')
        labelSenha.innerHTML = 'Senha'
        loginBox3.setAttribute('style','border-color:green')
        validSenha = true
    }
})

password1.addEventListener('keyup', ()=>{
    if(password.value != password1.value){
        labelConfirmar.setAttribute('style','color:red')
        labelConfirmar.innerHTML = "Senhas divergentes"
        loginBox4.setAttribute('style','border-color:red')
        validConfirma=false
    } else{
        labelConfirmar.setAttribute('style','color:green')
        labelConfirmar.innerHTML = 'Confirmar Senha'
        loginBox4.setAttribute('style','border-color:green')
        validConfirma = true
    }
})

}

//FUNÇÃO ABAIXO É PARA INPUTAR OS CARDS DE FILMES E SERIES

function rederSeriesFilmes(){
    return `<li class="movie">
    <div>
     Filme
    </div>
    <div>
     <span class="iconSeries"><span class="material-symbols-outlined">
     movie
     </span></span>
    </div>
    <div>
     Em breve
    </div>
 </li>
 <li class="movie">
     <div>
      Série
     </div>
     <div>
      <span class="iconSeries"><span class="material-symbols-outlined">
      tv
      </span></span>
     </div>
     <div>
      Em breve
     </div>
  </li>`
}

if (seriesFilmes){
for (let i = 0; i <8; i++) {
    seriesFilmes.innerHTML+=rederSeriesFilmes()
    
}
}

console.log(series1)
function series1(){
    return `<li class="movie">
    <div>
     Série
    </div>
    <div>
     <span class="iconSeries"><span class="material-symbols-outlined">
     tv
     </span></span>
    </div>
    <div>
     Em breve
    </div>
 </li>`
 
}
if (series){
    for (let i = 0; i <16; i++) {
        series.innerHTML+=series1()
    }
}




function filmes1(){
    return `<li class="movie">
    <div>
     Filme
    </div>
    <div>
     <span class="iconSeries"><span class="material-symbols-outlined">
     movie
     </span></span>
    </div>
    <div>
     Em breve
    </div>
 </li>`
}
if(filmes){
    for (let i = 0; i <16; i++) {
        filmes.innerHTML+=filmes1()
    }
}

// FUNÇÃO PARA DAR FUNCIONALIDADE AO BOTÃO DE "MOSTRAR SENHA"

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
        console.log("texto")
    } else {
        inputSenha.setAttribute('type', 'password')
        console.log("aaa")
    }

})
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
        console.log("texto")
    } else {
        inputSenha.setAttribute('type', 'password')
        console.log("aaa")
    }

})


btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password1')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type', 'text')
        console.log("texto")
    } else {
        inputSenha.setAttribute('type', 'password')
        console.log("aaa")
    }

})

//FUNÇÃO QUE VALIDA O CADASTRO E O CADASTRA NO LOCALSTORAGE DO BROWSER

function cadastrar(){
    if(validConfirma && validUser && validSenha && validNome){
        msgError.setAttribute('style', 'display:none')
        msgSucess.setAttribute('style', 'display:block')
        msgSucess.innerHTML = '<strong>Cadastrando...</strong>'

        let listaUser = JSON.parse(localStorage.getItem('listaUser') ||'[]')

        listaUser.push( 
            {
                nomeCad: nome.value,
                userCad:user.value,
                senhaCad:password.value
            }

        )
        
        localStorage.setItem('listaUser',JSON.stringify(listaUser))

        msgSucess.innerHTML = '<strong>Cadastrado com sucesso</strong>'

        setTimeout( ()=>{
            window.location.href='index.html'
        },2000
        )

       

    } else{
        msgSucess.setAttribute('style', 'display:none')
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
    }
}

//AUTENTICAÇÃO DE USUARIO NO LOGIN

function entrar(){
    let user = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')
    let boxLogin1 = document.querySelector('#boxlogin1')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    let boxLogin2 = document.querySelector('#boxlogin2')

    let msgError1 = document.querySelector('#msgError1') 
    let listaUser = []
    let arraylength = listaUser
    let userValid = {
        nome: ' ',
        user: ' ',
        senha: ' '

    }
   
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    if (arraylength==0) {
        userLabel.setAttribute('style', 'color:red')
        boxLogin1.setAttribute('style', 'border-color:red')
        senhaLabel.setAttribute('style', 'color:red')
        boxLogin2.setAttribute('style', 'border-color:red')
        msgError1.setAttribute("style", 'display:block')
        msgError1.innerHTML="Usuário ou senha incorretos"
        user.focus()
    } 
    
    listaUser.forEach((item) =>{
        if(user.value == item.userCad && senha.value == item.senhaCad){
            
            userValid = {
                nome: item.nomeCad,
                user:  item.userCad,
                senha: item.senhaCad
            }


        }
    })

    if(user.value==userValid.user && senha.value==userValid.senha){
       
        window.location.href='home.html'
        console.log("passou")
        

    } else{
        userLabel.setAttribute('style', 'color:red')
        boxLogin1.setAttribute('style', 'border-color:red')
        senhaLabel.setAttribute('style', 'color:red')
        boxLogin2.setAttribute('style', 'border-color:red')
        msgError1.setAttribute("style", 'display:block')
        msgError1.innerHTML="Usuário ou senha incorretos"
        user.focus()
        console.log("não passou")
    
    }
}   
 

function sair(){
    window.location.href ='index.html'
}
// FUNÇÃO PARA ABERTURA DE POP UP PARA LOGIN EM GOOGLE E FACE
google.addEventListener("click", ()=>{
    window.open("https://accounts.google.com/v3/signin/identifier?dsh=S135106958%3A1667686411265880&authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fclient%3Dopera-gx%26q%3Dgoogle%2Blogin%26sourceid%3Dopera%26ie%3DUTF-8%26oe%3DUTF-8&ec=GAlAAQ&hl=pt-BR&flowName=GlifWebSignIn&flowEntry=AddSession","Fazer login com conta Google","toolbar=no,location=no,directories=no,status=no, menubar=no,scrollbars=yes,resizable=no,width=600, height=550,top=150,left=600")
})
face.addEventListener("click", ()=>{
    window.open("https://pt-br.facebook.com/","Fazer login com conta Google","toolbar=no,location=no,directories=no,status=no, menubar=no,scrollbars=yes,resizable=no,width=600, height=550,top=150,left=600")
})

