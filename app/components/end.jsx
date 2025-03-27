import React from "react";

const End = ({ score }) => {
  return (
    <>
      <h1>
        {score < 10 && "Oof!"} You got {score} out of 20
        {score < 10 ? ". Better luck next time." : "! Nice!"}
      </h1>
      <Link href={"/"}>
        <button className="button">Want to play again</button>
      </Link>
      <h4>or</h4>
      <button
        className="button"
        onClick={() => {
          window.close();
        }}
      >
        What are we waiting for?
      </button>
    </>
  );
};

export default End;
