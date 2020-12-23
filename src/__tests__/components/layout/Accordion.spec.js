import React from 'react';
import { shallow } from 'enzyme';

import Accordion from '../../../components/layout/Accordion';

describe('Accordion Component', () => {
  test('should render accordion component', () => {
    const wrapper = shallow(
      <Accordion title="accordion">
        <p>Test accordion</p>
      </Accordion>
    );
    const accordion = wrapper.find('.accordion-app');
    expect(accordion).toHaveLength(1);
    expect(accordion.props().children[0].props.children.props.className).toBe(
      'accordion__title'
    );
  });
  test('should render accordion component on open', () => {
    const wrapper = shallow(
      <Accordion title="accordion">
        <p>Test accordion</p>
      </Accordion>
    );
    const accordion = wrapper.find('.accordion-app');
    expect(accordion).toHaveLength(1);

    wrapper.find('button').simulate('click');
    expect(accordion.hasClass('accordion--active'));
  });
});
