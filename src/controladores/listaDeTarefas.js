let { tarefas } = require('../bancoDeDados')


const listarTarefas = function (req, res) {
    return res.json(tarefas);
}

const cadastrarNovaTarefa = function (req, res) {
    const { nome, tarefa, dia } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: 'o nome de quem vai fazer a tarefa não indicada.' })
    }

    if (!tarefa) {
        return res.status(400).json({ mensagem: 'A tarefa não foi indicada.' })
    }

    if (!dia) {
        return res.status(400).json({ mensagem: 'O dia não foi indicado.' })
    }

    const novaTarefa = {
        idMorador: tarefas[tarefas.length - 1].idMorador + 1,
        nome,
        tarefa,
        dia
    }

    tarefas.push(novaTarefa)

    return res.status(201).json({ message: 'Morador e sua tarefa adicionados com sucesso' })
}

const excluirMorador = function (req, res) {
    const { idMorador } = req.params
    const moradorId = parseInt(req.params.idMorador);
    const index = tarefas.findIndex((id) => id.idMorador === moradorId);


    tarefas.splice(index, 1);
    return res.status(201).json({ message: 'Morador  e sua tarefa excluídos com sucesso' });

}

module.exports = {
    listarTarefas,
    cadastrarNovaTarefa,
    excluirMorador
}