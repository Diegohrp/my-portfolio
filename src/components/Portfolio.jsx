import styled from 'styled-components';
import { GoMarkGithub, GoLinkExternal } from 'react-icons/go';
import { LinkButton } from '../components/LinkButton';
import projectImg from '../assets/img/project.jpg';
const StyledPortFolio = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 30px;
    font-size: 3rem;
    color: ${(props) => props.theme.titleColor};
  }
  .projects {
    display: flex;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
    scroll-margin-inline: center;
    align-items: center;
    height: 400px;
    width: 300px;
    margin-bottom: 20px;
    &::-webkit-scrollbar {
      background-color: ${(props) => props.theme.scrollColor};
      height: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.accentColor};
      height: 3px;
    }
    .project {
      display: flex;
      flex-direction: column;
      background-color: ${(props) => props.theme.menuColor};
      min-width: 230px;
      height: 350px;
      margin-left: 20px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      text-align: center;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgb(89 73 30 / 16%);
      scroll-snap-align: center;
      img {
        margin: 25px 0 10px 0;
        width: 190px;
        min-height: 150px;
        border-radius: 15px;
      }
      &__info {
        h2 {
          font-size: 1.6rem;
          color: ${(props) => props.theme.titleColor};
          margin-bottom: 5px;
        }
        p {
          font-size: 1.4rem;
          text-align: justify;
          padding: 0 10px;
          color: ${(props) => props.theme.textColor};
        }
        div {
          width: 100%;
          display: flex;
          justify-content: space-around;
          a {
            width: 90px;
            margin: 15px 0;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
  @media (min-width: 700px) {
    .projects {
      margin: 30px 0 50px 0;
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(3, 300px);
      place-content: center;
      gap: 25px;
      .project {
        width: 300px;
        height: 300px;
        margin-left: 0;
        padding: 0;

        &__info {
          display: none;
        }
        img {
          width: 300px;
          height: 300px;
          margin: 0;
          object-fit: cover;
        }
      }
    }
  }
`;

function Portfolio() {
  const portfolio = [
    {
      name: 'Batatabit Landing',
      desc: 'A landing page for the branch Batatabit, coded with HTML and CSS using the design methodology mobile first.',
      img: '',
      repo: '',
      site: '',
    },
    {
      name: 'Batatabit Landing2',
      desc: 'A landing page for the branch Batatabit, coded with HTML and CSS using the design methodology mobile first.',
      img: '',
      repo: '',
      site: '',
    },
    {
      name: 'Batatabit Landing3',
      desc: 'A landing page for the branch Batatabit, coded with HTML and CSS using the design methodology mobile first.',
      img: '',
      repo: '',
      site: '',
    },
    {
      name: 'Batatabit Landing4',
      desc: 'A landing page for the branch Batatabit, coded with HTML and CSS using the design methodology mobile first.',
      img: '',
      repo: '',
      site: '',
    },
  ];
  return (
    <StyledPortFolio id='portfolio'>
      <h1>Portfolio</h1>
      <div className='projects'>
        {portfolio.map((project) => (
          <article className='project' key={project.name}>
            <img src={projectImg} alt='' />
            <div className='project__info'>
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
              <div>
                <LinkButton text='Go Repo' icon={<GoMarkGithub />} />
                <LinkButton text='Visit site' icon={<GoLinkExternal />} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </StyledPortFolio>
  );
}

export { Portfolio };
