import styled from 'styled-components';
import { GoMarkGithub, GoLinkExternal } from 'react-icons/go';
import { LinkButton } from '../components/LinkButton';
import weatherAppImg from '../assets/img/weatherApp.png';
import TodoAppImg from '../assets/img/ToDoApp.PNG';
import PokedexImg from '../assets/img/Pokedex.PNG';
import CatImg from '../assets/img/CatchCat.PNG';
import wordleImg from '../assets/img/Wordle.PNG';
import TimerImg from '../assets/img/Timer.PNG';
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
    height: 500px;
    width: 100%;
    margin-bottom: 20px;
    padding-right: 0 20px;
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
      min-width: 90%;
      height: 400px;
      margin-left: 30px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      text-align: center;
      border-radius: 15px;
      box-shadow: rgb(0 0 0 / 75%) 6px 6px 6px 0px;
      scroll-snap-align: center;
      img {
        margin: 25px 0 10px 0;
        width: 190px;
        min-height: 150px;
        border-radius: 15px;
        object-fit: contain;
      }
      &__info {
        h2 {
          font-size: 1.6rem;
          color: ${(props) => props.theme.titleColor};
          margin-bottom: 5px;
        }
        p {
          font-size: 1.4rem;
          text-align: left;
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
      padding: 30px 50px 50px 50px;
      margin: 0;
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, 300px);
      place-content: center;
      gap: 25px;
      .project {
        width: 300px;
        height: 300px;
        margin-left: 0;
        padding: 10px 0;
        cursor: pointer;
        position: relative;

        @keyframes showUp {
          25% {
            visibility: visible;
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
          75% {
            height: 300px;
            opacity: 0.8;
            transform: translateY(0px);
          }
          100% {
            height: 300px;
            visibility: visible;
            opacity: 1;
            transform: translateY(0px);
          }
        }

        &:hover .project__info {
          animation: showUp 700ms ease-in;
          animation-fill-mode: forwards;
        }

        &__info {
          padding: 0 20px;
          position: absolute;
          width: 300px;
          height: 150px;
          transform: translateY(-150px);
          visibility: hidden;
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          background-color: ${(props) => props.theme.menuColor};
          border-radius: 15px;
        }
        img {
          width: 200px;
          height: 300px;
          margin: 0;
          object-fit: fill;
        }
      }
    }
  }
`;

function Portfolio() {
  const portfolio = [
    {
      name: 'Weather App',
      desc: 'App to consult weather data from your location or form any city you want. Coded using React.js and styled components',
      img: weatherAppImg,
      repo: 'https://github.com/Diegohrp/weather-app',
      site: 'https://weather-app-nine-nu.vercel.app/',
    },
    {
      name: 'ToDo App',
      desc: 'TODO app created with React.js and styled components. You can add, delete, search and check your daily tasks.',
      img: TodoAppImg,
      repo: 'https://github.com/Diegohrp/todo_app',
      site: 'https://diegohrp.github.io/todo_app/',
    },
    {
      name: 'Pokedex',
      desc: 'Consumption of the REST API "PokeAPI" to get information of different pokemon. Coded with HTML, CSS and JavaScript.',
      img: PokedexImg,
      repo: 'https://github.com/Diegohrp/pokedex',
      site: 'https://diegohrp.github.io/pokedex/',
    },
    {
      name: 'Random Cat',
      desc: 'Example of the consumption of an API REST using "The Cat API". Coded using HTML, CSS and JavaScript',
      img: CatImg,
      repo: 'https://github.com/Diegohrp/Random-cat',
      site: 'https://diegohrp.github.io/Random-cat/',
    },
    {
      name: 'Wordle game',
      desc: 'Wordle game using HTML, CSS and JavaScript, try to guess the word an complete all levels',
      img: wordleImg,
      repo: 'https://github.com/Diegohrp/wordle',
      site: 'https://diegohrp.github.io/wordle/',
    },
    {
      name: 'Timer',
      desc: 'A timer, countdown and pomodoro all in one, use it to manage your time. Coded using HTML, CSS and JavaScript',
      img: TimerImg,
      repo: 'https://github.com/Diegohrp/timer',
      site: 'https://diegohrp.github.io/timer/',
    },
  ];
  return (
    <StyledPortFolio id='portfolio'>
      <h1>Portfolio</h1>
      <div className='projects'>
        {portfolio.map((project) => (
          <article className='project' key={project.name}>
            <img src={project.img} alt='' />
            <div className='project__info'>
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
              <div>
                <LinkButton
                  href={project?.repo}
                  text='Go Repo'
                  icon={<GoMarkGithub />}
                  target='_blank'
                />
                <LinkButton
                  text='Visit site'
                  icon={<GoLinkExternal />}
                  href={project?.site}
                  target='_blank'
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </StyledPortFolio>
  );
}

export { Portfolio };
