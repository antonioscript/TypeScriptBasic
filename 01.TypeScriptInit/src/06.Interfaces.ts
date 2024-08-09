interface IUsuario { 
    nome: string
    idade: number
}

//Obs1: Interface diferente do type, não tem o símbolo '='
//Obs2: Tem o mesmo efeito do type

let myUser: IUsuario


//Recomendação
    // Usar sempre que possível interface para tipar objetos
    // Usar type para outros tipos como 'string | number'