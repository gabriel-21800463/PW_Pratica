export interface ISubject {
  id?: string;
  nomeAluno?: string;
  disciplina?: string;
  curso?: string;
  dataInicio?: string;
  dataFinal?: string;
  email?: string;
  turno?: string;
}

export class Subject implements ISubject {
  constructor(
    public id?: string,
    public nomeAluno?: string,
    public dataFinal?: string,
    public curso?: string,
    public dataInicio?: string,
    public disciplina?: string,
    public email?: string,
    public turno?: string,
  ) {}
}
