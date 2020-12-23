import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

import { useField } from '@unform/core';

function Select({ name, options = [], ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <select ref={selectRef} className={classnames('', rest.className)}>
        {options.map((item) => {
          if (!item.defaultValue) {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          }
          return (
            <option key={-1} defaultValue>
              {item.label}
            </option>
          );
        })}
      </select>
      {error && <span className="error">{error}</span>}
    </>
  );
}

export default Select;
