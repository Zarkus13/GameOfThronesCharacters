import React, { useEffect, useRef, useState } from 'react';

interface Props {
  onAddCharacter: (name: string, imageUrl: string, title?: string, family?: string) => void
}

const AddCharacterForm: React.FC<Props> = ({ onAddCharacter }) => {
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
      Name :
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

      Title :
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

      Family :
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

      Image URL :
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
        Add character
      </button>
    </div>
  );
};

export default AddCharacterForm;