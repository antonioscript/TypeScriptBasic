//TYPE
type Order = {
    productId: string
    price: number
}

type User = {
    firstName : string //não precisa ter vírgula
    age: number
    email: string
    password?: string
    orders: Order[]
};

const user: User {
    firstName: 'Antônio',
    age: 20,
    email: 'antoniorocha@gmail.com',
    password: '12345',
    orders: [
        {
            productId = 1,
            price = 100
        }
    ]
}

//Acessando as propriedades do user
console.log(user.firstName);

//--------------------------
//INTERFACES
interface UserInterface { //Não precisa do igual '='
    readonly firstName : string 
    email: string
}

const emailUser : UserInterface = {
    firstName: 'Jão da Silva',
    email: 'joao@gmail.com'
}   