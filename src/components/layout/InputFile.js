import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

function InputFile({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input type="file" ref={inputRef} {...rest} />
      {error && <small className="input-error">{error}</small>}
    </>
  );
}

export default InputFile;
