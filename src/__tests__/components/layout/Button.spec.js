import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../../components/layout/Button';

describe('Button Component', () => {
  test('should render button', () => {
    const wrapper = shallow(<Button>testButton</Button>);
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
  });

  test('should render button if a text', () => {
    const wrapper = shallow(<Button>testButton</Button>);
    const button = wrapper.find('button').render().text();
    expect(button).toEqual('testButton');
  });

  test('should render button with a onclick callback ', () => {
    const mockCallback = jest.fn();

    const wrapper = shallow(
      <Button type="button" onClick={mockCallback}>
        testButton
      </Button>
    );
    const button = wrapper.find('button');
    button.find('button').simulate('click');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
