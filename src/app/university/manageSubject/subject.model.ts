export interface ISubject {
  id?: string;
  nomeAluno?: string;
  curso?: string;
  email?: string;
  turno?: string;
  bolsa?: string;
  nacionalidade?: string;
  date?: number;
}

export class Subject implements ISubject {
  constructor(
    public id?: string,
    public nomeAluno?: string,
    public curso?: string,
    public email?: string,
    public turno?: string,
    public bolsa?: string,
    public nacionalidade?: string,
    public date?: number,
  ) {}
}
