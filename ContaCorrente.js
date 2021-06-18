import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
	static numeroDeConta = 0;

	constructor(agencia, cliente) {
		super(agencia, cliente, 0);
		ContaCorrente.numeroDeConta += 1;
	}

	sacar(valor){
		let taxa = 1.1;
		const valorSacado = taxa * valor;
    	if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
}