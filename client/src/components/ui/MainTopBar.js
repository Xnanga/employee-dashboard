import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import DefaultButton from './DefaultButton';

const TopBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  & > h1 {
    margin: 0;
  }
`;

const MainTopBar = (props) => {
  return (
    <TopBar>
      <h1>{props.title}</h1>
      {props.hyperlink && (
        <Link to={props.hyperlink}>
          <DefaultButton
            btnColor={props.btnColor}
            btnLabel={props.btnLabel}
            btnAction={props.btnAction}
          />
        </Link>
      )}
    </TopBar>
  );
};

export default MainTopBar;
