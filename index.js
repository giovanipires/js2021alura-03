import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Giovani", 11122233309);

const contaCorrenteGiovani = new Conta(1001, cliente1, 0);
const contaPoupancaGiovani = new Conta(1001, cliente1, 100);

console.log(contaCorrenteGiovani);
console.log(contaPoupancaGiovani);