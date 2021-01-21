export type LanguageType = {
  data: Language[];
};

export interface IOptions {
  value: string;
  label: string;
}

export type Language = {
  id: number;
  flag: string;
  language: string;
  done: number;
  toDo: number;
  unresolved: number;
};
