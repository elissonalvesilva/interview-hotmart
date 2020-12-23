import React from 'react';
import { shallow } from 'enzyme';
import { useField } from '@unform/core';

import InputFile from '../../../components/layout/InputFile';

jest.mock('@unform/core');

describe('Input file Component', () => {
  test('should render a input file component', () => {
    useField.mockReturnValue({
      fieldName: 'input',
      defaultValue: 'input placeholder',
      registerField: jest.fn(),
      error: false,
    });

    const wrapper = shallow(<InputFile name="input" type="file" />);
    const inputElement = wrapper.find('input[type="file"]');
    expect(inputElement).toHaveLength(1);
  });
});
