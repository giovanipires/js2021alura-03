// Utilizados na primeira parte do curso
// import {ContaCorrente} from "./Conta/ContaCorrente.js";
// import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
// import {ContaSalario} from "./Conta/ContaSalario.js";

import {Pessoa} from "./Pessoa/Pessoa.js";
import {Cliente} from "./Pessoa/Cliente.js";
import {Funcionario} from "./Pessoa/Funcionario.js";
import {Gerente} from "./Pessoa/Gerente.js";
import {Diretor} from "./Pessoa/Diretor.js";
import {SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js";

const diretor = new Diretor("Giovani", "05495138806", 10000);
diretor.cadastrarSenha("123456789");
const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, "123456789");

const gerente = new Gerente("Marianna", "05495137705", 7000);
gerente.cadastrarSenha("987654321");
const gerenteEstaLogado = SistemaDeAutenticacao.login(diretor, "123456789");


const cliente = new Cliente("Fulano", "05495136604", "123789456");
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, "123789456");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
