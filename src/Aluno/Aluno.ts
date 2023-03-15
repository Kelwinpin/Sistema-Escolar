import DB from "../DAO/db";

export default class Aluno {
  private DBAluno = new DB();
  private nome: string;
  private dtaNasc: string;

  constructor(nome: string, dtaNasc: Date) {
    this.nome = nome;
    this.dtaNasc = dtaNasc.toLocaleDateString();
    console.log(this.save());
  }

  public get getNome(): string {
    return this.nome;
  }

  public get getDtaNasc(): string {
    return this.dtaNasc;
  }

  public set setNome(v: string) {
    this.nome = v;
  }

  public set setDtaNasc(v: string) {
    this.dtaNasc = v;
  }

  private save() {
    this.DBAluno.setAlunoInDB(this);
  }
}
