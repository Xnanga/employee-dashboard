import styled from '@emotion/styled';

const MainLayout = styled.main`
  background-color: var(--dark-grey);
  width: 80rem;
  margin: 4rem 0;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
`;

const MainBodyLayout = (props) => {
  return <MainLayout>{props.children}</MainLayout>;
};

export default MainBodyLayout;
