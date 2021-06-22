import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

	constructor(agencia, cliente, valorInicial) {
		super(agencia, cliente, valorInicial);
	}

	sacar(valor) {
		const taxa = 1.02;
		return this._sacar(valor, taxa);
	}

}