import { LanguageType } from './types';

export const GET_LANGUAGES_SUCCESS = 'GET_LANGUAGES_SUCCESS';
export const SET_NEW_LANGUAGE_SUCCESS = 'SET_NEW_LANGUAGE_SUCCESS';

export interface IGetLanguagesSuccess {
  type: typeof GET_LANGUAGES_SUCCESS;
  payload: LanguageType;
}

export interface ISetNewLanguage {
  type: typeof SET_NEW_LANGUAGE_SUCCESS;
  payload: LanguageType;
}

export type GetLanguagesTypes = IGetLanguagesSuccess | ISetNewLanguage;
