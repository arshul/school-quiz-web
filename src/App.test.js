import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
console.log('ur in app.test.js')
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
