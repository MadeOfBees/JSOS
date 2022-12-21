import GitHubIcon from '@mui/icons-material/GitHub';

function greetings() {
  if (new Date().getHours() < 12) { return 'morning'; }
  else if (new Date().getHours() < 18) { return 'afternoon'; }
  else { return 'evening'; };
};

function AboutUs() {
  return (
    <div>
      <h1>Good {greetings()}!</h1>
      <h3>Welcome to our site!</h3>
      <h3>The rules of MineSweeper are simple</h3>
      <ul>
        <li>Click on a square to reveal what is underneath</li>
        <li>If you click on a mine, you lose</li>
        <li>If you click on a number, it will tell you how many mines are in the surrounding squares</li>
        <li>If you click on a blank square, it will reveal all the surrounding squares</li>
      </ul>
      <p>This is a website made by: <a href="https://github.com/MadeOfBees">MadeOfBees </a><GitHubIcon /></p>
    </div>
  );
}

export default AboutUs;