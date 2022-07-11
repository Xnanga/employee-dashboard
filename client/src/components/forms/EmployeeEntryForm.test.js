import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import EmployeeEntryForm from './EmployeeEntryForm';

const mockInputValues = {
  profileImageFile: '/image.jpg',
  firstName: 'Joe',
  lastName: 'Bloggs',
  position: 'Software Developer',
  department: 'IT',
};

describe('EmployeeEntryForm component', () => {
  describe('displays', () => {
    test('a file upload button', () => {
      render(<EmployeeEntryForm />);
      const fileUploadButton = screen.getByLabelText(/profile photo:/i);

      expect(fileUploadButton).toBeInTheDocument();
    });

    test('a first name input field', () => {
      render(<EmployeeEntryForm />);
      const firstNameInput = screen.getByRole('textbox', {
        name: /first name:/i,
      });

      expect(firstNameInput).toBeInTheDocument();
    });

    test('a last name input field', () => {
      render(<EmployeeEntryForm />);
      const lastNameInput = screen.getByRole('textbox', {
        name: /last name:/i,
      });

      expect(lastNameInput).toBeInTheDocument();
    });

    test('a position input field', () => {
      render(<EmployeeEntryForm />);
      const positionInput = screen.getByRole('textbox', {
        name: /position:/i,
      });

      expect(positionInput).toBeInTheDocument();
    });

    test('a department dropdown menu with a default option', () => {
      render(<EmployeeEntryForm />);
      const departmentDropdown = screen.getByRole('option', { name: /it/i });

      expect(departmentDropdown).toBeInTheDocument();
    });

    test('an add entry button', () => {
      render(<EmployeeEntryForm />);
      const addEntryButton = screen.getByRole('button');

      expect(addEntryButton).toBeInTheDocument();
      expect(addEntryButton).toHaveTextContent(/add entry/i);
    });
  });

  describe('does not successfully submit when', () => {
    test('a field is empty', () => {
      // To-Do
    });

    test('an empty string is provided in an input field', () => {
      // To-Do
    });

    test('when the file upload field does not recieve a jpg or png file type', () => {
      // To-Do
    });
  });
});
