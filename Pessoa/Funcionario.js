import {Pessoa} from "./Pessoa.js";

export class Funcionario extends Pessoa {

	constructor(nome, cpf, salario) {
		super(nome, cpf);
		if(this.constructor == Funcionario) {
            throw new Error("Você não deve instanciar um objeto do tipo Funcionario diretamente.");
        }
		this._salario = salario;
		this._bonificacao = 1;
		this._senha;
	}

	get senha() {
		return this._senha;
	}
	
	autenticar(senha) {
		return senha == this._senha;
	}

	cadastrarSenha(senha) {
		this._senha = senha;
	}
}