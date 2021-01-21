import React, { Fragment, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getLanguagesDataAction } from './actions';
import { Language } from './models/types';
import { LanguageCard } from './components/language-card/LanguageCard';
import { SideBar } from './components/side-bar/SideBar';
import { ModalContainer } from './components/modal-container/ModalContainer';
import './languageList.scss';

export const LanguageList: React.FC = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector((state: RootStateOrAny) => {
    return state.languageList;
  });
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    dispatch(getLanguagesDataAction());
  }, []);

  return (
    <div className="container">
      {itemsList.loading ? (
        <div>loading</div>
      ) : (
        <Fragment>
          <SideBar />
          <main className="wrapper">
            <div className="wrapper__btn-block">
              <button className="button button--fill">New Project</button>
              <button className="button button--outline">Expand all</button>
              <button className="button button--outline">Collapse all</button>
            </div>
            <div className="wrapper__list">
              {itemsList.data.map((item: Language) => {
                return (
                  <LanguageCard
                    key={item.id}
                    flag={item.flag}
                    id={item.id}
                    language={item.language}
                    done={item.done}
                    toDo={item.toDo}
                    unresolved={item.unresolved}
                  />
                );
              })}
              <div className="wrapper__add-block">
                <button className="button button--outline" onClick={() => setToggleModal(!toggleModal)}>
                  Add language
                </button>
              </div>
            </div>
          </main>
        </Fragment>
      )}
      <ModalContainer isOpen={toggleModal} closeHandler={setToggleModal} />
    </div>
  );
};
