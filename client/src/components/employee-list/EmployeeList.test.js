import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import EmployeeList from './EmployeeList';

const mockAPIRequestReturn = [
  {
    _id: '62f79ef1c3fc686449ef0863',
    firstName: 'John',
    lastName: 'Smith',
    position: 'Software Engineer',
    department: 'IT',
    updatedAt: '2022-08-13T12:54:50.701Z',
    createdAt: '2022-08-13T12:54:50.701Z',
    __v: 0,
  },
  {
    _id: '62ebd1ec2228ff585ecc5e45',
    firstName: 'Tom',
    lastName: 'Paris',
    position: 'Navigator',
    department: 'Operations',
    createdAt: '2022-08-04T14:04:28.317Z',
    updatedAt: '2022-08-04T14:04:28.317Z',
    __v: 0,
  },
  {
    _id: '62ebd159b2a649c52cad54ff',
    firstName: 'Jane',
    lastName: 'Doe',
    position: 'Sales Associate',
    department: 'Customer Service',
    createdAt: '2022-08-04T14:02:01.460Z',
    updatedAt: '2022-08-04T14:02:01.460Z',
    __v: 0,
  },
];

// After an API call, does the number of employee widgets shown match the number
// of employee entries returned from the API

// During an API call, does the loading message appear

// If no employee data is available, does the notifying message appear

// If an error occurs during the API call, show error text

describe('EmployeeList component', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should display 3 employees when receiving 3 entries via an API call', async () => {
    render(<EmployeeList />);

    // Look into how to check for rendered employee widgets
  });

  test('should display a message when no data is available', () => {
    render(<EmployeeList />);

    expect(screen.getByText(/No Employee Data Available/i)).toBeVisible();
  });
});
