import styled from 'styled-components';
import { titles } from '../GlobalStyles';
const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 150px;
  height: 40px;
  border: 2px solid ${(props) => props.theme.accentColor};
  border-radius: 8px;
  font-size: 1.6rem;
  font-family: ${titles};
  font-weight: 500;
  text-decoration: none;
  margin: 20px 0;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
    transition: background-color ease-out 800ms;
    color: #eff3f8;
  }
  color: ${(props) => props.theme.textColor};
  svg {
    font-size: 1.8rem;
  }
`;

function LinkButton({ href, icon, text, target }) {
  return (
    <StyledButton target={target} href={href}>
      {text}
      {icon}
    </StyledButton>
  );
}

export { LinkButton };
