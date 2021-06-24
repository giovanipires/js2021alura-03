import {Pessoa} from "./Pessoa.js";

export class Cliente extends Pessoa {
 
	constructor(nome, cpf, senha) {
		super(nome, cpf);
		this._senha = senha;
	}

	autenticar() {
		return true;
	}
}