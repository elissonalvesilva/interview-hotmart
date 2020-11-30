import React, { useState } from 'react';
import classnames from 'classnames';

function Accordion({ title, className = '', children = null }) {
  const [openAccordion, setOpenAccordion] = useState(false);
  let activeAccordion = 'accordion--inactive';
  let classNamesAccordion = '';

  const onClick = () => {
    setOpenAccordion(!openAccordion);
  };

  if (openAccordion) {
    activeAccordion = 'accordion--active';
  }

  classNamesAccordion = `${activeAccordion} ${className}`;

  return (
    <div className={classnames('accordion-app', classNamesAccordion)}>
      <button type="button" className="accordion__button" onClick={onClick}>
        <span className="accordion__title">
          {title}
          <i className="fas fa-chevron-down accordion__icon" />
        </span>
      </button>
      <div className="accordion__body">{children}</div>
    </div>
  );
}

export default Accordion;
