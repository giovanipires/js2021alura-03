import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
	
	constructor(agencia, cliente, valorInicial) {
		super(agencia, cliente, 0.01);
	}

	sacar(valor) {
		const taxa = 1.01;
		return this._sacar(valor, taxa);
	}
}