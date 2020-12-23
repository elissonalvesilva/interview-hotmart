import React from 'react';
import { shallow } from 'enzyme';

import Conditional from '../../../components/layout/Conditional';

describe('Conditional Component', () => {
  test('should render a child component if is truthy', () => {
    const wrapper = shallow(
      <Conditional condition>
        <h1>teste</h1>
      </Conditional>
    );
    const h1Element = wrapper.find('h1');
    expect(h1Element).toHaveLength(1);
  });

  test('should not render a child component if is false', () => {
    const wrapper = shallow(
      <Conditional condition={false}>
        <h1>teste</h1>
      </Conditional>
    );
    const h1Element = wrapper.find('h1');
    expect(h1Element).toHaveLength(0);
  });
});
