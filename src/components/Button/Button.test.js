import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Button } from './Button';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Button', () => {
  test('should render with no errors', () => {
    const { container } = render(<Button>Test text</Button>);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveTextContent('Test text');
    expect(container.firstChild.nodeName).toBe('BUTTON');
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow(
      <Button onClick={mockCallBack}>Onclick works!</Button>
    );
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
