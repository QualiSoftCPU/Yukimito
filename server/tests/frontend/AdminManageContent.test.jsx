import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the jest-dom library
import AdminManageContent from '../../../client/src/pages/AdminManageContent'; // Adjust the import path based on your project structure

test('renders AdminManageContent component', () => {
  const { getByText } = render(<AdminManageContent />);
  const divElement = getByText('Admin ManageContent');
  expect(divElement).toBeInTheDocument();
});
