import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import * as enzyme from 'enzyme';
import { Input } from './Input';

configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('Input', () => {
  test('should render with no errors', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });

  it('render input with placeholder', () => {
    const props = {
        placeholder: 'test text',
      },
      InputPlaceHolder = enzyme.mount(<Input {...props} />);
    expect(InputPlaceHolder.prop('placeholder')).toEqual('test text');
  });

  it('Test change event', () => {
    const mockCallBack = jest.fn();
    const input = shallow(<Input onChange={mockCallBack} />);
    input.find('input').simulate('change');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
