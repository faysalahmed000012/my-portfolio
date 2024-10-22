export type Skill = {
  id: number;
  name: string;
  icon: string;
};

export type Skills = {
  frontEnd: Skill[];
  languages: Skill[];
  backend: Skill[];
  databases: Skill[];
};
