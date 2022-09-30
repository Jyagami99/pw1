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
      if (VetorProfessor[i][0] === RegistroFuncional) {
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
    arrayProfessores.push(Object.values(professores));
    alert("Cadastro realizado com sucesso!");
  } else {
    alert("Professor já está cadastrado no sistema!");
  }
}

function mostraProfessor() {
  if (arrayProfessores.length > 0) {
    let formulario = document.querySelector(".formularioCadastro");
    formulario.classList.toggle(".d-none");

    let listaDeProfessores = "";

    for (let i = 0; i < arrayProfessores.length; i++) {
      listaDeProfessores += ` 
      <p>
        Registro Funcional: ${arrayProfessores[i][0]} 
        <br>
        Nome Completo:  ${arrayProfessores[i][1]}
        <br>
        Data de Nascimento: ${arrayProfessores[i][2]}
        <br>
          Sexo: ${arrayProfessores[i][3]} 
        <br>
        Área de Pesquisa: ${arrayProfessores[i][4]} 
        <br>
        Universidade: ${arrayProfessores[i][5]} 
        <br>
        Email:  ${arrayProfessores[i][6]} 
        <br>
        Telefone: ${arrayProfessores[i][7]}
      </p>`;
    }
    document.querySelector(".conteudo").innerHTML = listaDeProfessores;
  } else {
    alert("Não há professores cadastrados!");
  }
}

function listarEspecifico() {
  // let rf = document.getElementById("listarProfessor").value;
  // let profCadastrado =
  //   "<table><tr><th>Registro Funcional</td><th>Nome</td><th>Data de nascimento</td><th>Sexo</td><th>Área de Pesquisa</td><th>Universidade de Formação</td><th>Email(s)</td><th>Telefone(s)</td></tr>";
  // if (arrayProfessores.length > 0) {
  //   cadastro = verificarCadastro(arrayProfessores, rf);
  //   if (cadastro != -1) {
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
  //     document.getElementById("tabelaEspecifico").innerHTML = profCadastrado;
  //   } else {
  //     document.getElementById("tabelaEspecifico").innerHTML =
  //       "Professor não encontrado no sistema!";
  //   }
  // } else {
  //   document.getElementById("tabelaEspecifico").innerHTML =
  //     "Não existe professores cadastrados no sistema!";
  // }
}

function mostraCadastro() {
  let conteudo = document.querySelector(".conteudo");
  conteudo.innerHTML = `
  <form class="formularioCadastro" name="searchfield" method="get">
    <input
      type="text"
      id="registrof"
      name="registrof"
      placeholder="Registro Funcional"
      required
    />
    <input
      type="text"
      id="nomec"
      name="nomec"
      placeholder="Nome completo"
      required
    />
    <input
      type="date"
      id="datanasc"
      name="datanasc"
      placeholder="Data de nascimento"
      required
    />
    <input
      type="text"
      id="sexo"
      name="sexo"
      placeholder="Sexo"
      required
    />
    <input
      type="text"
      id="areap"
      name="areap"
      placeholder="Area de pesquisa"
      required
    />
    <input
      type="text"
      id="universi"
      name="universi"
      placeholder="Universidade"
      required
    />
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Email"
      required
    />
    <input
      type="tel"
      id="telefone"
      name="telefone"
      minlength="10"
      maxlength="11"
      placeholder="Telefone"
      required
    />
  </form>
  <button id="botao" onclick="cadastroProfessor()">
    Cadastrar Professor
  </button>
  `;

  // console.log(conteudo);
}
