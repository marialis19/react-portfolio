import "./Header.css";

function Header ({ name, role, stack }) {
    return (
        <header className="header">
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p>{stack} </p>
        </header>
    );
}

export default Header;