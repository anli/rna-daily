import {render} from '@testing-library/react-native';
import React from 'react';
import {BasicView} from './view.composition';

it('should render with the correct children', () => {
  const {getByText} = render(<BasicView />);
  const rendered = getByText('Hello from view');
  expect(rendered).toBeTruthy();
});
