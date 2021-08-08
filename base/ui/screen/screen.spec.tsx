import {render} from '@testing-library/react-native';
import React from 'react';
import {BasicScreen} from './screen.composition';

it('should render with the correct children', () => {
  const {getByText} = render(<BasicScreen />);
  const rendered = getByText('Hello from screen');
  expect(rendered).toBeTruthy();
});
