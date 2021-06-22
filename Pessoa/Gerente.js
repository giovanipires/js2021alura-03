import {Pessoa} from "./Pessoa.js";
import {Funcionario} from "./Funcionario.js";

export class Gerente extends Funcionario {

	constructor(nome, cpf, salario) {
		super(nome, cpf, salario);
		this.bonificação = 1.1;
	}
}