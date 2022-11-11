const input_usuario = document.querySelector(".input_usuario");
const botaoadd = document.querySelector(".botaoadd");
const container_preenchimento = document.querySelector(".tarefas_adicionadas");
var  listaDeTarefas = JSON.parse(localStorage.getItem("listaDeTarefas")) || []
console.log(listaTarefas)
if(listaTarefas.length >0)tarefaslistadas()

function adicionar(){

 let valorImput = input_usuario.value ;
 
 if( (valorImput !== "" ) && ( valorImput !== null) && (valorImput !== undefined)){
  listaDeTarefas.push({nome:valorImput, concluido:false})
  atualizalocalstorage()
 input_usuario.value=""
 
 tarefaslistadas()
 }
 
 }

 function tarefaslistadas(){
   let tarefas = ""
   for(let i = 0 ; i < listaDeTarefas.length;i++){
    let item = listaDeTarefas[i]
    if(item.concluido){
      tarefas += `<div class="container_preenchimento item_clicado">
      <div onclick="marcarTarefa(${i})" class="item-icone" >
        <span class="material-symbols-outlined clicado">
          task_alt
          </span>
      </div>
      <div  class="item-nome"> ${item.nome}</div>
      <div class="item-botao">
        <button class="material-symbols-outlined botao-delete " onclick="deletarTarefa(${i})">
            delete
        </button>
      </div>
    </div>`

    }else{
      tarefas += ` <div  class="container_preenchimento">
      <div onclick="marcarTarefa(${i})" class="item-icone" >
        <span class="material-symbols-outlined nao_clicado" >
          circle
          </span>
      </div>
      <div  class="item-nome">${item.nome}</div>
      <div class="item-botao">
        <button class="material-symbols-outlined botao-delete " onclick="deletarTarefa(${i})">
            delete
        </button>
      </div>
    </div></div>`
    }
   
   }
   let container_preenchimento = document.querySelector(".tarefas_adicionadas")
   container_preenchimento.innerHTML=tarefas
   }

   function deletarTarefa(indice){
      let resultado = listaDeTarefas.filter((item,i)=>indice!==i)
      listaDeTarefas= resultado
      tarefaslistadas()
      atualizalocalstorage()
    
   }
 
   input_usuario.addEventListener("keyup", function (event) {
    //SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
      event.preventDefault();
      botaoadd.click();
    }}
   )



function marcarTarefa(index){
  listaDeTarefas[index].concluido=!listaDeTarefas[index].concluido
tarefaslistadas()
atualizalocalstorage()

}


function atualizalocalstorage() {
  localStorage.setItem("listaDeTarefas",JSON.stringify(listaDeTarefas))



}









