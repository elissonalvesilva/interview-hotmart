import React from 'react';
import { shallow } from 'enzyme';

import Card from '../../../components/layout/Card';

describe('Card Component', () => {
  test('should render card component', () => {
    const wrapper = shallow(
      <Card>
        <h1>teste card</h1>
      </Card>
    );
    const card = wrapper.find('.card-app');
    expect(card).toHaveLength(1);
  });
  test('should render card component with children', () => {
    const wrapper = shallow(
      <Card>
        <h2>teste card</h2>
      </Card>
    );
    const card = wrapper.find('.card-app');
    const h2Element = wrapper.find('h2');
    expect(card).toHaveLength(1);
    expect(h2Element).toHaveLength(1);
  });
  test('should render card component with title', () => {
    const wrapper = shallow(
      <Card title="title">
        <h2>teste card</h2>
      </Card>
    );
    const card = wrapper.find('.card-app');
    const h1Element = wrapper.find('h1').render().text();
    expect(card).toHaveLength(1);
    expect(h1Element).toEqual('title');
  });
  test('should render card component with class pass through props', () => {
    const wrapper = shallow(
      <Card title="title" className="test-card">
        <h2>teste card</h2>
      </Card>
    );
    const card = wrapper.find('.card-app');
    const className = wrapper.find('.test-card');
    expect(card).toHaveLength(1);
    expect(className).toHaveLength(1);
  });
});
