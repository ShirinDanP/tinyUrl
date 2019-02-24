import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Button from './Button';

afterEach(cleanup);

describe('Button', () => {
  test('should render with no errors', () => {
    const { container } = render(<Button>Test text</Button>);

    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveTextContent('Test text');
    expect(container.firstChild.nodeName).toBe('button');
  });
s});
