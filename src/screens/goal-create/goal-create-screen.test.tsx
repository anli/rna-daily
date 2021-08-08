import {render} from '@test';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {GoalCreateScreen} from './goal-create-screen';

const mockNavigate = jest.fn();
const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack,
      canGoBack: jest.fn().mockReturnValue(true),
    }),
  };
});

describe('Given I am at "Goal Create Screen"', () => {
  beforeEach(() => {
    jest.useRealTimers();
  });

  afterEach(() => {
    jest.useFakeTimers();
  });

  it('Then I should see ui components', () => {
    const {getByA11yLabel, getByText} = render({
      component: GoalCreateScreen.Component,
    });
    expect(getByText('Create Goal')).toBeDefined();
    expect(getByA11yLabel('goal name input')).toBeDefined();
    expect(getByA11yLabel('goal description input')).toBeDefined();
    expect(getByText('Save')).toBeDefined();
  });

  it('When submit missing form data, Then I should see validation errors', async () => {
    const {getByText, findByText} = render({
      component: GoalCreateScreen.Component,
    });

    fireEvent.press(getByText('Save'));

    expect(await findByText('Name is required.')).toBeDefined();

    expect(getByText('Description is required.')).toBeDefined();
  });

  it('When submit correct form data, Then I should see previous screen', async () => {
    const {getByText, getByA11yLabel} = render({
      component: GoalCreateScreen.Component,
    });

    fireEvent(getByA11yLabel('goal name input'), 'onChangeText', 'NAME');
    fireEvent(
      getByA11yLabel('goal description input'),
      'onChangeText',
      'DESCRIPTION',
    );
    fireEvent.press(getByText('Save'));

    expect(mockGoBack).toBeCalledTimes(0);
    await waitFor(() => expect(mockGoBack).toBeCalledTimes(1));
    expect(mockGoBack).toBeCalledTimes(1);
  });
});
