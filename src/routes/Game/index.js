import s from "./style.module.css";

const GamePage = ({ onReturnHomePage }) => {
  return (
    <>
      <div>This is Game Page!!!</div>
      <button className={s.button} onClick={onReturnHomePage}>
        Return Home Page
      </button>
    </>
  );
};

export default GamePage;
