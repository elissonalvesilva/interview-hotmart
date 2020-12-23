import React from 'react';
import { shallow } from 'enzyme';

import Head from '../../../components/layout/Head';

describe('Head Component', () => {
  test('should render head component', () => {
    const wrapper = shallow(<Head />);
    const head = wrapper.find('.head-app');
    expect(head).toHaveLength(1);
  });
});
