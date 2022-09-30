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
        arrayDisciplinas.push(disciplinas);
        console.log(arrayDisciplinas);
        return alert("Cadastro realizado com sucesso!");
    } else {
        return alert("Disciplina já está cadastrada no sistema!");
    }
}

