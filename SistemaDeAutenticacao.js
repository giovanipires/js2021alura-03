/*
Ser autenticavel significa ter a propriedade "senha".
*/

export class SistemaDeAutenticacao {
	static login(autenticavel, senha) {
		return autenticavel.autenticar(senha);
	}
}