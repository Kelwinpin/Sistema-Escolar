import Aluno from "../Aluno/Aluno.js";

export default class DB {
  vetor: Aluno[] = [];

  public setAlunoInDB(v: Aluno) {
    this.vetor.push(v);
    console.log(
      `Aluno cadastrado com sucesso !!! \n Aluno:${this.ToString()} \n`,
    );
    return true;
  }

  public ToString() {
    return this.vetor.map(
      (a) => `Nome: ${a.getNome} \n Data de nascimento:${a.getDtaNasc}`,
    );
  }
}
