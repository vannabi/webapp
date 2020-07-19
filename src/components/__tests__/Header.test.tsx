import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from '../Header';

describe('Header suite', () => {
  it('should render Header', () => {
    const component = renderer.create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
