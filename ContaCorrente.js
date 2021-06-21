import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
	static numeroDeConta = 0;

	constructor(agencia, cliente) {
		super(agencia, cliente, 0);
		ContaCorrente.numeroDeConta += 1;
	}

	sacar(valor){
		let taxa = 1.1;
		return super._sacar(valor, taxa);
    }
}