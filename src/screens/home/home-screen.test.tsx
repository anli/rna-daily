import {render} from '@testing-library/react-native';
import React from 'react';
import {HomeScreen} from './home-screen';

describe('Given I am at "Home Screen"', () => {
  it('Then I should see "Create Goal Button"', () => {
    const {getByText} = render(<HomeScreen.Component />);
    expect(getByText('Create Goal')).toBeDefined();
  });
});
