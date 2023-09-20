
// Um array para armazenar os doadores
const doadores = [{idade:0, nome:0, peso:0, tipoSangue:0, ultimaDoacao:0}]

// Função para cadastrar um doador
function cadastrarDoador() {
  guia = doadores.length
  doadores[guia] = {...doadores[0]}
    doadores [guia].nome = prompt('Digite seu nome:')
    doadores [guia].idade = prompt('Digite sua idade:')
    doadores [guia].peso = prompt ('Digite seu peso:')
    doadores [guia].tipoSangue = prompt('Qual seu tipo sanguíneo?')
    doadores [guia].ultimaDoacao = prompt ('Quando foi sua ultima doação (dd/mm/aaaa)')
    console.log (`Nome: ${doadores[guia].nome} Idade: ${doadores[guia].idade} Tipo Sanguíneo: ${doadores[guia].tipoSangue} Ultima Doação: ${doadores[guia].ultimaDoacao}`)
    alert("Doador cadastrado com sucesso!");
  }

  
  
  
  // Função para listar os doadores
  function listarDoadores() {
    let resultado = "===== LISTAGEM DE DOADORES =====";
    console.log (resultado)
    //Aqui vai o código que lista todos os doadores
for (busca=1; busca<doadores.length; busca++)
console.log (`Nome: ${doadores[busca].nome} Idade: ${doadores[busca].idade} Tipo Sanguíneo: ${doadores[busca].tipoSangue} Ultima Doação: ${doadores[busca].ultimaDoacao}`)
  }
  
  // Função para buscar doadores por tipo sanguíneo
  function buscarPorTipoSanguineo() {
    const tipoSanguineo = prompt("Digite o tipo sanguíneo desejado: ");

   
   
   

    resultado = "RESULTADO DA BUSCA:\n"; 
    console.log (resultado)

   
    for (busca=1; busca<doadores.length; busca++)
   {
    if (tipoSanguineo === doadores[busca].tipoSangue){
      console.log (`Nome: ${doadores[busca].nome} Idade: ${doadores[busca].idade} Tipo Sanguíneo: ${doadores[busca].tipoSangue} Ultima Doação: ${doadores[busca].ultimaDoacao}`)
    }
  
    } 
   

    
    //Aqui vai o código que busca doadores por tipo sanguíneo


  }
  
  // Função para buscar doadores por data da última doação
  function buscarPorDataUltimaDoacao() {
    const dataDesejada = prompt("Digite a data desejada (dd/mm/aaaa): ");
    
  
    
    resultado = "RESULTADO DA BUSCA:\n";
   console.log(resultado)
    //Aqui vai o código que busca os doadores por data da última doação
  
    for (busca=1; busca<doadores.length; busca++)
    {
     if (dataDesejada === doadores[busca].ultimaDoacao){
      console.log (`Nome: ${doadores[busca].nome} Idade: ${doadores[busca].idade} Tipo Sanguíneo: ${doadores[busca].tipoSangue} Ultima Doação: ${doadores[busca].ultimaDoacao}`)
     }
  }
  }
  // Função para executar a ação com base na opção selecionada no menu suspenso
  function executarAcao() {
    const opcoes = document.getElementById("opcoes");
    const opcaoSelecionada = opcoes.value;
  
    switch (opcaoSelecionada) {
      case "cadastrar":
        cadastrarDoador();
        break;
      case "listar":
        listarDoadores();
        break;
      case "buscarTipo":
        buscarPorTipoSanguineo();
        break;
      case "buscarData":
        buscarPorDataUltimaDoacao();
        break;
      case "sair":
        console.log("Encerrando o programa.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
  
 
  