import React from 'react';
import { shallow } from 'enzyme';
import { useField } from '@unform/core';

import Select from '../../../components/layout/Select';

jest.mock('@unform/core');

describe('Select Component', () => {
  test('should render a select component', () => {
    useField.mockReturnValue({
      fieldName: 'select-component',
      registerField: jest.fn(),
      error: false,
    });

    const options = [
      { defaultValue: true, label: 'Selecione' },
      { value: 1, label: 'option 1' },
    ];

    const wrapper = shallow(
      <Select name="select-component" options={options} />
    );
    const selectElement = wrapper.find('select');
    expect(selectElement).toHaveLength(1);
    expect(selectElement.props().children[1].props.children).toBe('option 1');
  });
});
