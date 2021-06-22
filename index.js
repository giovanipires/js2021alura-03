import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import {ContaSalario} from "./ContaSalario.js";

const cliente1 = new Cliente("Giovani", 11122233309);

const contaCorrenteGiovani = new ContaCorrente(1001, cliente1, 0);
const contaPoupancaGiovani = new ContaPoupanca(1001, cliente1, 100);

contaCorrenteGiovani.depositar(1000);
contaCorrenteGiovani.transferir(300, contaPoupancaGiovani);

contaCorrenteGiovani.sacar(70);
contaPoupancaGiovani.sacar(30);

console.log(contaCorrenteGiovani);
console.log(contaPoupancaGiovani);

// const instaciandoConta = new Conta(1001, cliente1,0);
// console.log(instaciandoConta);

const contaSalarioGiovani = new ContaSalario(`1001-S`,cliente1);
contaSalarioGiovani.depositar(1000);
console.log(contaSalarioGiovani);

contaSalarioGiovani.sacar(100);
console.log(contaSalarioGiovani);