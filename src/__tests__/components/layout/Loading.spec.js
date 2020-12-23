import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../../components/layout/Loading';

describe('Loading Component', () => {
  test('should render loading component', () => {
    const wrapper = shallow(<Loading />);
    const loading = wrapper.find('.loading-app');
    expect(loading).toHaveLength(1);
  });
});
