//Union
let id: number | string //Pode ser number ou string


//01. TypeAlias
type Id = number | string //Tipando number ou string

let id1: Id //Do tipo 'Id'
let id2: Id
let id3: Id
let id4: Id

//02. TypeAlias (tipando objetos)
type Usuario = { nome: string, idade: number}; //É melhor do que utilizar objeto

let user: Usuario 
