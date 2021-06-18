import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Giovani", 11122233309);

const contaCorrenteGiovani = new ContaCorrente(1001, cliente1, 0);
const contaPoupancaGiovani = new ContaPoupanca(1001, cliente1, 100);

contaCorrenteGiovani.depositar(1000);
contaCorrenteGiovani.transferir(300, contaPoupancaGiovani);

contaCorrenteGiovani.sacar(70);
contaPoupancaGiovani.sacar(30);

console.log(contaCorrenteGiovani);
console.log(contaPoupancaGiovani);