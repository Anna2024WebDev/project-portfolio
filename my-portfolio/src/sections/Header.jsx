import "./Header.css"

export const Header = () => {
  console.log("header");
  return (
    <div className="header">
      <h1>
        <span className="welcome">Hi there, I’m</span>
      </h1>
      <h1 className="name">Anna Hansen</h1>
      <p className="intro-text">
        Creative Frontend Developer with a background in Finance and Sales Administration
      </p>
    </div>
  );
};