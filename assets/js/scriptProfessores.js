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
    Telefone: document.getElementById("telefone").value,
  };

  function verificarCadastro(VetorProfessor, RegistroFuncional) {
    for (let i = 0; i < VetorProfessor.length; i++) {
      if (VetorProfessor[i].RegistroFuncional == RegistroFuncional) {
        return i;
      }
    }
    return -1;
  }

  if (Object.values(professores).includes(""))
    return alert("Preencha todos os campos para concluir o cadastro!");

  let cadastro = verificarCadastro(
    arrayProfessores,
    professores.RegistroFuncional
  );

  if (cadastro == -1) {
    arrayProfessores.push(professores);
    console.log(arrayProfessores);
    return alert("Cadastro realizado com sucesso!");
  } else {
    return alert("Professor já está cadastrado no sistema!");
  }
}

function mostraProfessor() {
  if (arrayProfessores.length > 0) {
    console.log(arrayProfessores);
    let formulario = document.querySelector(".formularioCadastro");
    formulario.classList.toggle("d-none");

    let listaDeProfessores = "";
    listaDeProfessores += ` 
    <p>
      Registro Funcional: ${arrayProfessores[i].RegistroFuncional} 
      <br>
      Nome Completo:  ${arrayProfessores[i].NomeCompleto}
      <br>
      Data de Nascimento: ${arrayProfessores[i].DataDeNascimento}
      <br>
      Sexo: ${arrayProfessores[i].Sexo} 
      <br>
      Área de Pesquisa: ${arrayProfessores[i].AreaPesquisa} 
      <br>
      Universidade: ${arrayProfessores[i].Universidade} 
      <br>
      Email:  ${arrayProfessores[i].Email} 
      <br>
      Telefone: ${arrayProfessores[i].Telefone}
    </p>`;
    document.querySelector(".conteudo").innerHTML = listaDeProfessores;
  } else {
    console.log(arrayProfessores);
    alert("Não há professores cadastrados!");
  }

  // let profCadastrado = `
  // <table>
  //   <tr>
  //     <th>Registro Funcional
  //     </td>
  //     <th>Nome
  //     </td>
  //     <th>Data de nascimento
  //     </td>
  //     <th>Sexo
  //     </td>
  //     <th>Área de Pesquisa
  //     </td>
  //     <th>Universidade de Formação
  //     </td>
  //     <th>Email(s)
  //     </td>
  //     <th>Telefone(s)
  //     </td>
  //   </tr>`;
  // if (arrayProfessores.length > 0) {
  //   for (let i = 0; i < arrayProfessores.length; i++) {
  //     profCadastrado +=
  //       "<tr><td>" +
  //       arrayProfessores[i].RegistroFuncional +
  //       "<tr><td>" +
  //       arrayProfessores[i].NomeCompleto +
  //       "<tr><td>" +
  //       arrayProfessores[i].DataDeNascimento +
  //       "<tr><td>" +
  //       arrayProfessores[i].Sexo +
  //       "<tr><td>" +
  //       arrayProfessores[i].AreaPesquisa +
  //       "<tr><td>" +
  //       arrayProfessores[i].Universidade +
  //       "<tr><td>" +
  //       arrayProfessores[i].Email +
  //       "<tr><td>" +
  //       arrayProfessores[i].Telefone +
  //       "<tr><td>";
  //     profCadastrado += "</table>";
  //     document.getElementById("container").innerHTML = profCadastrado;
  //     console.log(profCadastrado);
  //   }
  // } else {
  //   console.log(profCadastrado);
  //   document.getElementById("container").innerHTML =
  //     "Não existe professores cadastrados no sistema!";
  // }
}

function listarEspecifico() {
  let rf = document.getElementById("listarProfessor").value;
  let profCadastrado =
    "<table><tr><th>Registro Funcional</td><th>Nome</td><th>Data de nascimento</td><th>Sexo</td><th>Área de Pesquisa</td><th>Universidade de Formação</td><th>Email(s)</td><th>Telefone(s)</td></tr>";

  if (arrayProfessores.length > 0) {
    cadastro = verificarCadastro(arrayProfessores, rf);
    if (cadastro != -1) {
      profCadastrado +=
        "<tr><td>" +
        arrayProfessores[i].RegistroFuncional +
        "<tr><td>" +
        arrayProfessores[i].NomeCompleto +
        "<tr><td>" +
        arrayProfessores[i].DataDeNascimento +
        "<tr><td>" +
        arrayProfessores[i].Sexo +
        "<tr><td>" +
        arrayProfessores[i].AreaPesquisa +
        "<tr><td>" +
        arrayProfessores[i].Universidade +
        "<tr><td>" +
        arrayProfessores[i].Email +
        "<tr><td>" +
        arrayProfessores[i].Telefone +
        "<tr><td>";
      profCadastrado += "</table>";

      document.getElementById("tabelaEspecifico").innerHTML = profCadastrado;
    } else {
      document.getElementById("tabelaEspecifico").innerHTML =
        "Professor não encontrado no sistema!";
    }
  } else {
    document.getElementById("tabelaEspecifico").innerHTML =
      "Não existe professores cadastrados no sistema!";
  }
}
