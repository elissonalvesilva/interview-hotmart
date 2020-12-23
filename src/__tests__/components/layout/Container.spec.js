import React from 'react';
import { shallow } from 'enzyme';

import Container from '../../../components/layout/Container';

describe('Container Component', () => {
  test('should render Container component', () => {
    const wrapper = shallow(<Container />);
    const container = wrapper.find('.container-app');
    expect(container).toHaveLength(1);
  });

  test('should render Container component with children', () => {
    const wrapper = shallow(
      <Container>
        <p>teste container</p>
      </Container>
    );
    const container = wrapper.find('.container-app');
    expect(container).toHaveLength(1);
    expect(wrapper.children().length).toBe(1);
  });
});
