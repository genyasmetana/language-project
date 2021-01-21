import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { setNewLanguageAction } from '../../actions';
import { ModalWindow } from '../../../common-components/modal-window/ModalWindow';
import { IOptions } from '../../models/types';

import './modalContainer.scss';

interface IModalContainer {
  isOpen: boolean;
  closeHandler: any;
}

export const ModalContainer: React.FC<IModalContainer> = ({ isOpen, closeHandler }) => {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState({
    value: '',
    label: '',
  });

  const options: IOptions[] = [
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'ru', label: 'Russian' },
    { value: 'ua', label: 'Ukranian' },
    { value: 'it', label: 'Italian' },
  ];

  const handleChange = (option?: IOptions | null) => {
    console.log(option);
    setLanguage({
      ...language,
      ...option,
    });
  };

  const handleSubmit = () => {
    dispatch(setNewLanguageAction(language));
    setLanguage({
      label: '',
      value: '',
    });
    closeHandler();
  };

  return (
    <ModalWindow isOpen={isOpen} closeHandler={closeHandler}>
      <h3 className="modal-block__title">Add languages</h3>
      <div className="modal-block__select">
        <Select options={options} onChange={handleChange} />
      </div>
      <div className="modal-block__footer">
        <button onClick={() => closeHandler()} className="button button--outline">
          Close
        </button>
        <button disabled={!language.value} className="button button--fill" onClick={() => handleSubmit()}>
          Add
        </button>
      </div>
    </ModalWindow>
  );
};
