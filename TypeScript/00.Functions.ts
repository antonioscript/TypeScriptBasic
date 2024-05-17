//00. Função com símbolo de lâmbda (retorno implícito do tipo number)
const sum  = (x: number, y: number) => {
    return (x + y);
}

const value = sum (2, 3);

console.log(value) //output: 5

//01. Função com símbolo de lâmbda explícito
const sum2  = (x: number, y: number) : number => {
    return (x + y);
}

const value2 = sum2 (2, 3);

console.log(value2) //output: 5

//02. Função sem símbolo de lâmbida (retorno implícito)
const sum3  = (x: number, y: number)  {
    return (x + y);
}

const value3 = sum3 (2, 3);

console.log(value3) //output: 5


//02. Função sem símbolo de lâmbda (retorno explícito)
const sum4  = (x: number, y: number) : number {
    return (x + y);
}

const value4 = sum4 (2, 3);

console.log(value4) //output: 5

//--------------------------------------

//04. Função com nome function (retorno implícito)
function sum5 (x: number, y : number) {
    return x + y;
}

const value5 = sum5 (2, 3);

console.log(value5) //output: 5

//05. Função com nome function (retorno explícito)
function sum6 (x: number, y : number) : number {
    return x + y;
}

const value6 = sum6 (2, 3);

console.log(value6) //output: 5

//------------------------------------
//Função associada a uma variável


//OBS: Em todos os casos não há necessidade de explicitar a variável x e y
