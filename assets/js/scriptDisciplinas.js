let arrayDisciplinas = [];

function cadastrarDisciplina(){
    let disciplinas = {
        Sigla: document.getElementById("sigla").value,
        NomeDisciplina: document.getElementById("nomed").value,
        Ementa: document.getElementById("ementa").value,
        LivrosBibliografia: document.getElementById("livros_bibliografia").value,
        NumeroCreditos: document.getElementById("numeroCreditos").value,
        CargaHoraria: document.getElementById("cargaHoraria").value,
    };

    function verificarCadastro(VetorDisciplina, Sigla) {
        for (let i = 0; i < VetorDisciplina.length; i++) {
          if (VetorDisciplina[i].Sigla == Sigla) {
            return i;
          }
        }
        return -1;
      }

    if (Object.values(disciplinas).includes(""))
        return alert("Preencha todos os campos para concluir o cadastro!");

    let cadastro = verificarCadastro(
        arrayDisciplinas,
        disciplinas.Sigla
        );

    if (cadastro == -1) {
        arrayDisciplinas.push(Object.values(disciplinas));
        alert("Cadastro realizado com sucesso!");
    } else {
        alert("Disciplina já está cadastrada no sistema!");
    }
}

function mostraDisciplina() {
    if (arrayDisciplinas.length > 0) {
        let formulario = document.querySelector(".formularioCadastro");
        formulario.classList.toggle(".d-none");
  
        let listaDeDisciplinas = "";
  
        for (let i = 0; i < arrayDisciplinas.length; i++) {
            listaDeDisciplinas += ` 
            <p>
            Sigla: ${arrayDisciplinas[i].Sigla} 
            <br>
            Nome Disciplina:  ${arrayDisciplinas[i].NomeDisciplina}
            <br>
            Ementa: ${arrayDisciplinas[i].Ementa}
            <br>
            Livros e Bibliografia: ${arrayDisciplinas[i].LivrosBibliografia} 
            <br>
            Número de Créditos: ${arrayDisciplinas[i].NumeroCreditos} 
            <br>
            Carga Horária: ${arrayDisciplinas[i].CargaHoraria} 
            </p>`;
        }
        document.querySelector(".conteudo").innerHTML = listaDeDisciplinas;
    } else {
      alert("Não há disciplinas cadastradas!");
    }
  }
