import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme.footerColor};
  color: ${(props) => props.theme.titleColor};
  font-size: 1.6rem;
  position: relative;
  box-shadow: 2px 2px 4px 4px rgb(0 0 0 / 25%);
  .icons-info {
    font-size: 1.2rem;
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: ${(props) => props.theme.titleColor};
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px 20px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        .icon {
          font-size: 6rem;
          margin-bottom: 5px;
          color: ${(props) => props.theme.titleColor};
        }
        &:hover .icon {
          color: ${(props) => props.theme.accentColor};
        }
        &:hover ~ p {
          color: ${(props) => props.theme.accentColor};
        }
      }
      p {
        font-weight: 500;
      }
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/diego-herrera-prado-280867161/'>
            <AiFillLinkedin className='icon' />
          </a>
          <p>Diego Herrera Prado</p>
        </li>
        <li>
          <a href='https://github.com/Diegohrp'>
            <BsGithub className='icon' />
          </a>
          <p>@Diegohrp</p>
        </li>
        <li>
          <a href='https://gmail.com/'>
            <SiGmail className='icon' />
          </a>

          <p>diego.blake11@gmail.com</p>
        </li>
      </ul>
      <a
        className='icons-info'
        href='https://iconscout.com/contributors/icon-mafia'>
        Skill Icons by Icon Mafia
      </a>
    </StyledFooter>
  );
}

export { Footer };
