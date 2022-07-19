import '@testing-library/jest-dom';
import { findByText, fireEvent, render, screen } from '@testing-library/react';

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
    test('a field is empty', async () => {
      render(<EmployeeEntryForm />);

      const firstNameInput = screen.getByRole('textbox', {
        name: /first name:/i,
      });
      const lastNameInput = screen.getByRole('textbox', {
        name: /last name:/i,
      });
      const positionInput = screen.getByRole('textbox', {
        name: /position:/i,
      });
      const fileUploadButton = screen.getByLabelText(/profile photo:/i);
      const addEntryButton = screen.getByRole('button');

      firstNameInput.name = 'Joe';
      lastNameInput.name = 'Bloggs';
      positionInput.name = 'Software Engineer';
      fileUploadButton.name = 'C:\\fakepath\\conservatory-icon.png';
      fireEvent.click(addEntryButton);

      expect(firstNameInput.name).toBe('Joe');
      expect(lastNameInput.name).toBe('Bloggs');
      expect(positionInput.name).toBe('Software Engineer');
      expect(fileUploadButton.name).toBe('C:\\fakepath\\conservatory-icon.png');
      expect(
        await screen.findByText('Looks like something went wrong...')
      ).toBeInTheDocument();
    });

    test('an empty string is provided in an input field', async () => {
      render(<EmployeeEntryForm />);

      const firstNameInput = screen.getByRole('textbox', {
        name: /first name:/i,
      });
      const lastNameInput = screen.getByRole('textbox', {
        name: /last name:/i,
      });
      const positionInput = screen.getByRole('textbox', {
        name: /position:/i,
      });
      const fileUploadButton = screen.getByLabelText(/profile photo:/i);
      const addEntryButton = screen.getByRole('button');

      firstNameInput.name = 'Joe';
      lastNameInput.name = ' ';
      positionInput.name = 'Software Engineer';
      fileUploadButton.name = 'C:\\fakepath\\conservatory-icon.png';
      fireEvent.click(addEntryButton);

      expect(firstNameInput.name).toBe('Joe');
      expect(lastNameInput.name).toBe(' ');
      expect(positionInput.name).toBe('Software Engineer');
      expect(
        await screen.findByText('Looks like something went wrong...')
      ).toBeInTheDocument();
    });

    test('the file upload field does not receive a jpg or png file type', () => {
      // To-Do
    });
  });
});
