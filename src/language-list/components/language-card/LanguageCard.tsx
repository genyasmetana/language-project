import React from 'react';
import { Language } from '../../models/types';
import { ProgressBar } from '../../../common-components/progress-bar/ProgressBar';
import './languageCard.scss';

export const LanguageCard: React.FC<Language> = ({ language, done, toDo, unresolved, flag }) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header-title">
          <img className="card__header-img" alt="flag" src={flag} />
          {language}
        </div>
        <ProgressBar done={done} />
      </div>
      <div className="card__footer">
        <div className="card__descr">
          <p className="card__descr-title">done</p>
          <p className="card__descr-value">{done}%</p>
        </div>

        <div className="card__descr">
          <p className="card__descr-title">words to do</p>
          <a href="#" className="card__descr-value card__descr-value--link">
            {toDo}
          </a>
        </div>

        <div className="card__descr">
          <p className="card__descr-title">unverified</p>
          <a href="#" className="card__descr-value card__descr-value--link">
            {unresolved}
          </a>
        </div>
      </div>
    </div>
  );
};
