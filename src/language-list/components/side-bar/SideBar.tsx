import React from 'react';
import ArrowDown from '../../../media/icons/arrow-down.svg';
import ArrowUp from '../../../media/icons/arrow-up.svg';
import Book from '../../../media/icons/book.svg';
import Camera from '../../../media/icons/camera.svg';
import CheckMark from '../../../media/icons/check-mark.svg';
import Pulse from '../../../media/icons/pulse.svg';
import User from '../../../media/icons/user.svg';
import { ProgressBar } from '../../../common-components/progress-bar/ProgressBar';

import './sideBar.scss';

export const SideBar: React.FC = () => {
  return (
    <aside className="side-bar">
      <h3 className="side-bar__title">Roamer App (Android SDK test)</h3>
      <ProgressBar done={30} height={3} />

      <div className="info">
        <div className="info__block">
          <p className="info__block-title">DONE</p>
          <p className="info__block-value">30%</p>
        </div>
        <div className="info__block">
          <p className="info__block-title">base words</p>
          <p className="info__block-value">160246</p>
        </div>
        <div className="info__block">
          <p className="info__block-title">team</p>
          <a href="#" className="info__block-value info__block-value--link">
            26
          </a>
        </div>
        <div className="info__block">
          <p className="info__block-title">keys</p>
          <p className="info__block-value">1834</p>
        </div>
        <div className="info__block">
          <p className="info__block-title">qa issues</p>
          <a href="#" className="info__block-value info__block-value--link">
            47514
          </a>
        </div>
      </div>

      <div className="button-container">
        <button className="button-item__icon" disabled>
          <img src={ArrowUp} />
        </button>
        <button className="button-item__icon" disabled>
          <img src={ArrowDown} />
        </button>
        <button className="button-item__icon" disabled>
          <img src={CheckMark} />
        </button>
        <button className="button-item__icon" disabled>
          <img src={User} />
        </button>
        <button className="button-item__icon" disabled>
          <img src={Pulse} />
        </button>
        <button className="button-item__icon" disabled>
          <img src={Camera} />
        </button>
        <button className="button-item__icon" disabled>
          <img src={Book} />
        </button>
        <button className="button-item__text button-item__text--roamer">Roamer</button>
        <button className="button-item__text button-item__text--ios">iOS</button>
      </div>
    </aside>
  );
};
