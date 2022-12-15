import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props {
  onAddCharacter: (name: string, imageUrl: string, title?: string, family?: string) => void
}

const AddCharacterForm: React.FC<Props> = ({ onAddCharacter }) => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [family, setFamily] = useState('');
  const [imageURL, setImageURL] = useState('');

  const nameInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const familyInputRef = useRef<HTMLInputElement>(null);
  const imageURLInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef?.current?.focus();
  }, []);

  const onValidateForm = () => {
    onAddCharacter(
      name,
      imageURL,
      title === '' ? undefined : title,
      family === '' ? undefined : family
    );

    setName('');
    setTitle('');
    setFamily('');
    setImageURL('');

    nameInputRef?.current?.focus();
  };

  return (
    <div>
      {t('characters.name')} :
      <input
        type="text"
        value={name}
        ref={nameInputRef}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter')
            titleInputRef?.current?.focus();
        }}
      /> <br/>

      {t('characters.title')} :
      <input
        type="text"
        value={title}
        ref={titleInputRef}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter')
            familyInputRef?.current?.focus();
        }}
      /> <br/>

      {t('characters.family')} :
      <input
        type="text"
        value={family}
        ref={familyInputRef}
        onChange={(e) => setFamily(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter')
            imageURLInputRef?.current?.focus();
        }}
      /> <br/>

      {t('characters.image-url')} :
      <input
        type="text"
        value={imageURL}
        ref={imageURLInputRef}
        onChange={(e) => setImageURL(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter')
            onValidateForm();
        }}
      /> <br/>

      <button onClick={onValidateForm}>
        {t('characters.add')}
      </button>
      <Link to="/characters">Close</Link>
    </div>
  );
};

export default AddCharacterForm;