export class Conta {

	constructor(agencia, cliente, valorInicial) {
		this._agencia = agencia;
		this._cliente = cliente;
		this._saldo = valorInicial;
	}

	sacar(valor){
    	if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}