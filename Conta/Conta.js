// classe abstrata
export class Conta {

	constructor(agencia, cliente, valorInicial) {
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente.");
        }
		this._agencia = agencia;
		this._cliente = cliente;
		this._saldo = valorInicial;
	}

	set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // método abstrato
	sacar(valor) {
        throw new Error ("O método sacar da Conta é abstrato.");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0) {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}