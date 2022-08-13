import styles from './DefaultButton.module.css';
import styled from '@emotion/styled';

// To-do: Figure out how to make BG color dynamic based on props
const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  background-color: ${(props) => props.btnColor || '#3369ff'};
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;

  &:hover,
  &:active {
    transform: scale(1.05);
  }

  /* &--blue {
    background-color: #244ab1 !important;
  }

  &--green {
    background-color: #25c43a !important;
  }

  &--red {
    background-color: #c52828 !important;
  } */
`;

const DefaultButton = (props) => {
  const determineClassName = (btnColor) => {
    if (!btnColor) {
      return `${styles['default-btn']}`;
    } else {
      const btnClass = btnColor.toLowerCase();
      return `${styles['default-btn']} ${styles[btnClass]}`;
    }
  };

  return (
    <button
      className={determineClassName(props.btnColor)}
      onClick={props.btnAction}
    >
      {props.btnLabel}
    </button>
  );
};

export default DefaultButton;
