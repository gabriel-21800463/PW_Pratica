export interface ICourse {
  id?: string;
  nomeCurso?: string;
  turno?: string;
  estagio?: string;
  ects?: string;
  teacher?: string;
  specialization?: string;
  grau?: string;
  disciplina?: string;
  subject?: string;
  nomeAluno?: string;
  bolsa?: string;
  nacionalidade?: string;
  date?: number;
}

export class Course implements ICourse {
  constructor(
    public id?: string,
    public nomeCurso?: string,
    public teacher?: string,
    public subject?: string,
    public turno?: string,
    public estagio?: string,
    public ects?: string,
    public specialization?: string,
    public grau?: string,
    public disciplina?: string,
    public nomeAluno?: string,
    public bolsa?: string,
    public nacionalidade?: string,
    public date?: number,
  ) {}
}
