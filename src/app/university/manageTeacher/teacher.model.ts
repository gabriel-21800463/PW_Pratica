export interface ITeacher {
  id?: string;
  nomeTeacher?: string;
  curso?: string;
  grau?: string;
  localFormacao?: string;
  disciplina?: string;
  turno?: string;
}

export class Teacher implements ITeacher {
  constructor(
    public id?: string,
    public nomeTeacher?: string,
    public curso?: string,
    public grau?: string,
    public localFormacao?: string,
    public disciplina?: string,
    public turno?: string,
  ) {}
}
