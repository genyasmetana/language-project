import reducer, { IInitialState } from './index';
import { GET_LANGUAGES_SUCCESS, SET_NEW_LANGUAGE_SUCCESS } from '../models/actions';

const initialState: IInitialState = {
  loading: true,
  data: [],
};

const mockData = {
  data: [
    {
      id: 1,
      code: 'gb',
      language: 'English',
      done: 20,
      toDo: 16345,
      unresolved: 50000,
    },
  ],
  loading: false,
};

describe('languages list actions', () => {
  it('get languages successful', () => {
    expect(
      reducer(initialState, {
        type: GET_LANGUAGES_SUCCESS,
        payload: mockData,
      }),
    ).toEqual({
      ...initialState,
      ...mockData,
      loading: false,
    });
  });

  it('set new language successful', () => {
    expect(
      reducer(initialState, {
        type: SET_NEW_LANGUAGE_SUCCESS,
        payload: mockData,
      }),
    ).toEqual({
      ...initialState,
      ...mockData,
      loading: false,
    });
  });
});
