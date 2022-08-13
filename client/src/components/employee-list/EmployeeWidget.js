import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import DefaultButton from '../ui/DefaultButton';

const EmployeeWidgetSection = styled.section`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid grey;
  background-color: var(--light-grey);
`;

const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    height: 12.5rem;
    width: 12.5rem;
    border: 1px solid grey;
  }
`;

const InfoSection = styled.div`
  height: 100%;

  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    line-height: 2.25;
    list-style-type: none;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 12.5rem;
  margin-left: auto;
`;

const EmployeeWidget = (props) => {
  const sendEmployeeDeleteRequest = async (employeeId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/delete-employee&id=${employeeId}`,
        {
          method: 'DELETE',
          body: { employeeId: employeeId },
        }
      );
      const responseData = await response.json();
      props.employeeDataChangeHandler();
      return responseData;
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  return (
    <EmployeeWidgetSection id={props.id}>
      <ImageSection>
        <img
          src="https://nutristyle.com/wp-content/uploads/2020/06/bio-photo-placeholder.png"
          alt="Employee Portrait"
        />
      </ImageSection>
      <InfoSection>
        <ul>
          <li>
            <strong>Name: </strong>
            {`${props.firstName} ${props.lastName}`}
          </li>
          <li>
            <strong>Position: </strong>
            {props.position}
          </li>
          <li>
            <strong>Department: </strong>
            {props.department}
          </li>
        </ul>
      </InfoSection>
      <ButtonSection>
        <Link to={`/employees/${props.id}`}>
          <DefaultButton btnLabel="Edit Entry" />
        </Link>
        <DefaultButton
          btnAction={() => sendEmployeeDeleteRequest(props.id)}
          btnLabel="Delete Entry"
          btnColor="red"
        />
      </ButtonSection>
    </EmployeeWidgetSection>
  );
};

export default EmployeeWidget;
