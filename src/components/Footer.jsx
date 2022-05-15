import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.primaryColor};
`;

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export { Footer };
