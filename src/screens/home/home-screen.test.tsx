import {render} from '@test';
import {fireEvent} from '@testing-library/react-native';
import {HomeScreen} from './home-screen';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('Given I am at "Home Screen"', () => {
  it('Then I should see "Create Goal Button"', () => {
    const {getByText} = render({component: HomeScreen.Component});
    expect(getByText('Create Goal')).toBeDefined();
  });

  it('When I press "Create Goal Button", Then I should see "Create Goal Screen"', () => {
    const {getByText} = render({component: HomeScreen.Component});

    fireEvent.press(getByText('Create Goal'));

    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('GoalCreate');
  });
});
