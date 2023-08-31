import "./Header.css"
function Header(){
    return <header className="header">
        <div className="content">
            <div className="logo">
                <img src="/img/Vector.png" alt="people"/>
                <h2>ORG</h2>
            </div>
            <div className="info">
                <h1 className="header__title">Personas y equipos</h1>
                <h3>Organizados en un solo lugar</h3>
            </div>
        </div>
        <img className="people" src="/img/people.png" alt="people"/>
    </header>;
}
export default Header