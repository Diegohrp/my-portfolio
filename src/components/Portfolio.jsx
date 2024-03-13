import styled from 'styled-components';
import { GoMarkGithub, GoLinkExternal } from 'react-icons/go';
import { LinkButton } from '../components/LinkButton';
import tweeterImg from '../assets/img/tweeter-clone.PNG';
import mediCitaImg from '../assets/img/medicita.PNG';
import whacImg from '../assets/img/whac-a-mole.PNG';
import hotelImg from '../assets/img/hotel-management-system.PNG';
import weatherAppImg from '../assets/img/weatherApp.png';
import TodoAppImg from '../assets/img/ToDoApp.PNG';
import PokedexImg from '../assets/img/Pokedex.PNG';
import CatImg from '../assets/img/CatchCat.PNG';
import wordleImg from '../assets/img/Wordle.PNG';
import TimerImg from '../assets/img/Timer.PNG';
import easybankImg from '../assets/img/easybank.JPG';
import batatabitImg from '../assets/img/batatabit.PNG';
const StyledPortFolio = styled.section`
  transition: background-color 0.3s, border-color 0.3s;
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
    padding: 0 20px;
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
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 35%) 3px 3px 3px 0px;
      scroll-snap-align: center;
      img {
        margin: 25px 0 10px 0;
        width: 290px;
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
          width: 250px;
          height: 300px;
          margin: 0;
          object-fit: contain;
        }
      }
    }
  }
`;

function Portfolio() {
  const portfolio = [
    {
      name: 'Tweeter-Twitter Clone',
      desc: "Full-Stack Web application called Tweeter that replicates some of Twitter's core functionalities. Built using React.js, Styled-components, Express.js, MySQL and Cloudinary. Default user: miguel@eaglefang.com, password: 12345678",
      img: tweeterImg,
      repo: 'https://github.com/Diegohrp/tweeter-frontend',
      site: 'https://tubular-syrniki-a4621a.netlify.app/home',
    },
    {
      name: 'MediCita',
      desc: 'Web Application to schedule medical appointments. Coded using React.js and TailwindCSS. Default user: user@mail.com, password: #Hulkeate19',
      img: mediCitaImg,
      repo: '',
      site: 'https://medicita.vercel.app/',
    },
    {
      name: 'Weather App',
      desc: 'App to consult weather data from your location or form any city you want. Coded using React.js and styled components.',
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
      name: 'Whac-A-Mole',
      desc: 'Whack-a-mole game, coded using HTML and CSS. The characters and scenario are drawn and animated using pure CSS',
      img: whacImg,
      repo: 'https://github.com/Diegohrp/animationCSS',
      site: 'https://diegohrp.github.io/animationCSS/',
    },

    {
      name: 'Hotel Management System',
      desc: 'A desktop application to make and manage hotel reservations. Coded using Java, JavaFx and CSS',
      img: hotelImg,
      repo: 'https://github.com/Diegohrp/challenge-ONE-hotel',
      site: '',
    },
    {
      name: 'Easybank Landing page',
      desc: 'Solution to Frontend Mentor Challenge "Easybank landing page". Coded using HTML, CSS and JavaScript.',
      img: easybankImg,
      repo: 'https://github.com/Diegohrp/Easybank-landing-page',
      site: 'https://diegohrp.github.io/Easybank-landing-page/',
    },
    {
      name: 'Batatabit Landing page',
      desc: 'Landing page coded using HTML, CSS and JavaScript.',
      img: batatabitImg,
      repo: 'https://github.com/Diegohrp/landing-page_batatabit',
      site: 'https://diegohrp.github.io/landing-page_batatabit/',
    },
    {
      name: 'Pokedex',
      desc: 'Consumption of the REST API "PokeAPI" to get information of different pokemon. Coded with HTML, CSS and JavaScript.',
      img: PokedexImg,
      repo: 'https://github.com/Diegohrp/pokedex',
      site: 'https://diegohrp.github.io/pokedex/',
    },

    /*  {
      name: 'Random Cat',
      desc: 'Example of the consumption of an API REST using "The Cat API". Coded using HTML, CSS and JavaScript.',
      img: CatImg,
      repo: 'https://github.com/Diegohrp/Random-cat',
      site: 'https://diegohrp.github.io/Random-cat/',
    }, */
    {
      name: 'Wordle game',
      desc: 'Wordle game using HTML, CSS and JavaScript, try to guess the word an complete all levels.',
      img: wordleImg,
      repo: 'https://github.com/Diegohrp/wordle',
      site: 'https://diegohrp.github.io/wordle/',
    },

    {
      name: 'Timer',
      desc: 'A timer, countdown and pomodoro all in one, use it to manage your time. Coded using HTML, CSS and JavaScript.',
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
                {project?.repo && (
                  <LinkButton
                    href={project.repo}
                    text='Go Repo'
                    icon={<GoMarkGithub />}
                    target='_blank'
                  />
                )}
                {project?.site && (
                  <LinkButton
                    text='Visit site'
                    icon={<GoLinkExternal />}
                    href={project?.site}
                    target='_blank'
                  />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </StyledPortFolio>
  );
}

export { Portfolio };
