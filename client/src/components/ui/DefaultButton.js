import styled from '@emotion/styled';

const buttonColours = {
  blue: '#244ab1',
  green: '#25c43a',
  red: '#c52828',
};

const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  background-color: ${({ btnColor }) => buttonColours[btnColor] || 'blue'};

  &:hover,
  &:active {
    transform: scale(1.05);
  }
`;

const DefaultButton = (props) => {
  return (
    <Button btnColor={props.btnColor} onClick={props.btnAction}>
      {props.btnLabel}
    </Button>
  );
};

export default DefaultButton;
