import GitHubIcon from '@mui/icons-material/GitHub';

function greetings() {
  if (new Date().getHours() < 12) { return 'morning'; }
  else if (new Date().getHours() < 18) { return 'afternoon'; }
  else { return 'evening'; };
};

function AboutUs() {
  return (
    <div>
      <h1>Good {greetings()}! Welcome to our site!</h1>
      <h3>The rules of SOS:</h3>
      <ul>
        <li>The goal of the game is to spell SOS.</li>
        <li>Each player takes turns placing a letter on the board.</li>
        <li>The game ends when one player spells SOS or when the board is full.</li>
      </ul>
      <p>This is a website made by: <a href="https://github.com/MadeOfBees">MadeOfBees </a><GitHubIcon /></p>
    </div>
  );
}

export default AboutUs;