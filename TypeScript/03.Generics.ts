const returnValue1 = (value: any) => value

const message1 = returnValue1('Hello World')
const count1 = returnValue1(5)

//-----------------------------------
//GENERICS (passar tipos como parâmetros)
const returnValue = <T>(value: T) : T => value

const message = returnValue<string>('Hello World')
const count = returnValue(5)