import "./Header.css";

function Header({ name, role, stack }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>{name}</h1>
          <h2>{role}</h2>
          <p>{stack}</p>
        </div>

        <div className="header-image">
          <img src= {`${process.env.PUBLIC_URL}/perfil_cv.png`}
  alt="Foto de perfil"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
