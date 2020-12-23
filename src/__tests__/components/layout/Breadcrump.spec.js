import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumb from '../../../components/layout/Breadcrumb';

describe('Breadcrump Component', () => {
  test('should render breadcrump component', () => {
    const breadcrumbItems = [
      { href: '/', label: 'Dashboard' },
      { href: '/', label: 'QuickOps' },
      { href: '/', label: 'current', active: true },
    ];
    const wrapper = shallow(<Breadcrumb items={breadcrumbItems} />);
    expect(wrapper.children().length).toBe(3);
  });
});
