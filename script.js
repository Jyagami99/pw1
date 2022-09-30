let arrayProfessores = [];
 
function cadastroProfessor() {
  let professores = {
    RegistroFuncional: document.getElementById("registrof").value,
    NomeCompleto: document.getElementById("nomec").value,
    DataDeNascimento: document.getElementById("datanasc").value,
    Sexo: document.getElementById("sexo").value,
    AreaPesquisa: document.getElementById("areap").value,
    Universidade: document.getElementById("universi").value,
    Email: document.getElementById("email").value,
    Telefone: document.getElementById("telefone").value
  };

  Cadastro = verificarCadastro(arrayProfessores, professores.RegistroFuncional);
  if(Cadastro == -1){
    arrayProfessores.push(professores);
    alert("Professor cadastrado no sistema!");
  }
  else{
    alert("Professor já cadastrado no sistema!")
  }

  if (Object.values(professores).includes(""))
    return alert("Preencha todos os campos para concluir o cadastro!");
}

function verificarCadastro(VetorProfessor,RegistroFuncional)
{
    let i = 0;
    for(i=0;i<VetorProfessor.length;i++){
        if (VetorProfessor[i].RegistroFuncional == RegistroFuncional)
        {
            return i;
        }
    }
    return -1;
}

function mostraProfessor() {
  let profCadastrado = "<table><tr><th>Registro Funcional</td><th>Nome</td><th>Data de nascimento</td><th>Sexo</td><th>Área de Pesquisa</td><th>Universidade de Formação</td><th>Email(s)</td><th>Telefone(s)</td></tr>";
  let i = 0;

  if(arrayProfessores.length > 0){
    for(i=0; i < arrayProfessores.length; i++){
      profCadastrado += "<tr><td>" + arrayProfessores[i].RegistroFuncional + "<tr><td>" + arrayProfessores[i].NomeCompleto + "<tr><td>" + arrayProfessores[i].DataDeNascimento + "<tr><td>" + arrayProfessores[i].Sexo + "<tr><td>" + arrayProfessores[i].AreaPesquisa + "<tr><td>" + arrayProfessores[i].Universidade + "<tr><td>" + arrayProfessores[i].Email + "<tr><td>" + arrayProfessores[i].Telefone + "<tr><td>";
      profCadastrado += "</table>";

      document.getElementById("tabelaLista").innerHTML = profCadastrado;
    }
  }
  else{
    document.getElementById("tabelaLista").innerHTML = "Não existe professores cadastrados no sistema!";
  };
}

function listarEspecifico() {
  let rf = document.getElementById("listarProfessor").value;
  let profCadastrado = "<table><tr><th>Registro Funcional</td><th>Nome</td><th>Data de nascimento</td><th>Sexo</td><th>Área de Pesquisa</td><th>Universidade de Formação</td><th>Email(s)</td><th>Telefone(s)</td></tr>";

  if(arrayProfessores.length > 0){
    cadastro = verificarCadastro(arrayProfessores, rf);
    if(cadastro != - 1){
      profCadastrado += "<tr><td>" + arrayProfessores[i].RegistroFuncional + "<tr><td>" + arrayProfessores[i].NomeCompleto + "<tr><td>" + arrayProfessores[i].DataDeNascimento + "<tr><td>" + arrayProfessores[i].Sexo + "<tr><td>" + arrayProfessores[i].AreaPesquisa + "<tr><td>" + arrayProfessores[i].Universidade + "<tr><td>" + arrayProfessores[i].Email + "<tr><td>" + arrayProfessores[i].Telefone + "<tr><td>";
      profCadastrado += "</table>";

      document.getElementById("tabelaEspecifico").innerHTML = profCadastrado;
    }
    else{
      document.getElementById("tabelaEspecifico").innerHTML = "Professor não encontrado no sistema!";
    }
  }
  else{
    document.getElementById("tabelaEspecifico").innerHTML = "Não existe professores cadastrados no sistema!";
  }
}
