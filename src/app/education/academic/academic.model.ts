export interface IAcademic {
  id?: string;
  educationalInstitution?: string;
  formation?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  grade?: string;
  activities?: string;
  description?: string;
  academicTeamMembers?: IAcademicTeamMember[]; // teste
}

export class Academic implements IAcademic {
  constructor(
    public id?: string,
    public educationalInstitution?: string,
    public formation?: string,
    public fieldOfStudy?: string,
    public startDate?: string,
    public endDate?: string,
    public grade?: string,
    public activities?: string,
    public description?: string,
    public academicTeamMembers?: IAcademicTeamMember[]
  ) {}
}

export interface IAcademicTeamMember {
  id?: string;
  startDate?: string;
  endDate?: string;
}

export class AcademicTeamMember implements IAcademicTeamMember {
  constructor(
    public id?: string,
    public startDate?: string,
    public endDate?: string
  ) {}
}
