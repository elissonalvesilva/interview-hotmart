import React from 'react';
import { shallow } from 'enzyme';

import SideMenu from '../../../components/layout/SideMenu';

describe('SideMenu Component', () => {
  test('should render sidemenu component', () => {
    const wrapper = shallow(<SideMenu />);
    const sidemenu = wrapper.find('.sidemenu-app');
    expect(sidemenu).toHaveLength(1);
  });
});
