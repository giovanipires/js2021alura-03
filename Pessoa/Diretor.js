import {Pessoa} from "./Pessoa.js";
import {Funcionario} from "./Funcionario.js";

export class Diretor extends Funcionario {

	constructor(nome, cpf, salario, bonificação) {
		super(nome, cpf, salario, );
		this.bonificação = 2;
	}
}