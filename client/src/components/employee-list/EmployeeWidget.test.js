import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import EmployeeWidget from './EmployeeWidget';

// Employee widget should not be in the document after delete button is clicked

// The window URL should change when the edit button is clicked

// Should display a name, a position, and a department

const mockProps = {
  employeeDataChangeHandler: () => {},
  id: 25598457398456013487,
  firstName: 'John',
  lastName: 'Smith',
  position: 'Engineer',
  department: 'Engineering',
};

describe('EmployeeWidget component', () => {
  test('should disappear after clicking the Delete button', () => {
    render(
      <EmployeeWidget
        key={mockProps.id}
        id={mockProps.id}
        firstName={mockProps.firstName}
        lastName={mockProps.lastName}
        position={mockProps.position}
        department={mockProps.department}
        employeeDataChangeHandler={mockProps.employeeDataChangeHandler}
      />
    );

    const deleteButton = screen.getByRole('button');

    console.log(deleteButton);

    // expect(deleteButton).toBeVisible();
  });
});
