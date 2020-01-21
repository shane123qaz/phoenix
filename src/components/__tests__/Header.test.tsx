import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from '../Header';

describe('Header', () => {
  test('should render header correctly', () => {
    const { baseElement } = render(<Header title={'hah'} />);

    expect(baseElement).toMatchSnapshot();
  });
});
