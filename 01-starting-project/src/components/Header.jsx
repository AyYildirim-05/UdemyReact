import reactImag from '../assets/react-core-concepts.png'; // ../ go up a level

const reactDesc = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const desc = reactDesc[getRandomInt(2)];
    
    return (
      <header>
          <img src={reactImag} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {desc} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  }