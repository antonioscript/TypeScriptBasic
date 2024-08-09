interface IPessoa {
    nome: string
    idade: number
    carro?: string
}

interface IAluno extends IPessoa {
    curso: string
    ira: number
}

let aluno: IAluno

aluno = {
    nome: 'Antônio',
    idade: 26, 
    curso: 'Engenharia da Computação',
    ira: 8,
    carro : undefined //ou simplesmente não coloca
} //Consigo acessar as propriedades da interface Pessoa