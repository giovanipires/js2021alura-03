import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

	constructor(agencia, cliente, valorInicial) {
		super(agencia, cliente, valorInicial);
	}

}