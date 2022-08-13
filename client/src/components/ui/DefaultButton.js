import styled from '@emotion/styled';

const buttonColours = {
  blue: '#244ab1',
  green: '#25c43a',
  red: '#c52828',
};

const DefaultButton = (props) => {
  const Button = styled.button({
    display: 'inline-block',
    padding: '0.75rem 1rem',
    borderRadius: '5px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    transition: 'all 0.2s',
    cursor: 'pointer',
    backgroundColor: props.btnColor
      ? buttonColours[props.btnColor]
      : buttonColours.blue,

    '&:hover, &:active': {
      transform: 'scale(1.05)',
    },
  });

  return <Button onClick={props.btnAction}>{props.btnLabel}</Button>;
};

export default DefaultButton;
