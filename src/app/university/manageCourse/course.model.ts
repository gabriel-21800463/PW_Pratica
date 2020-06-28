export interface ICourse {
  id?: string;
  nomeCurso?: string;
  teacher?: string;
  subject?: string;
  turno?: string;
  estagio?: string;
  ects?: string;
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
  ) {}
}
