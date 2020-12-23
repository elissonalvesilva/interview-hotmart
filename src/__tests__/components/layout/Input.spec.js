import React from 'react';
import { shallow } from 'enzyme';
import { useField } from '@unform/core';

import Input from '../../../components/layout/Input';

jest.mock('@unform/core');

describe('Input Component', () => {
  test('should render a input component', () => {
    useField.mockReturnValue({
      fieldName: 'input',
      defaultValue: 'input placeholder',
      registerField: jest.fn(),
      error: false,
    });

    const wrapper = shallow(<Input name="input" type="text" />);
    const inputElement = wrapper.find('input');
    expect(inputElement).toHaveLength(1);
  });
});
