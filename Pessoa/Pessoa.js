// classe abstrata
export class Pessoa {

	    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
    	if(this.constructor == Pessoa) {
            throw new Error("Você não deve instanciar um objeto do tipo Pessoa diretamente.");
        }
        this._nome = nome;
        this._cpf = cpf;
    }
}