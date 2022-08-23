export default class Validacoes {

    static validaEmail(email){
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return regex.test(email)
    }
    static validaNome(nome) {
        return nome.length >= 2
    }
    static validaCPF(CPF) {
        const cpfNumber = CPF.split().parseInt()
        if (CPF.length = 9) {
            cpfNumber
        }
    }
}