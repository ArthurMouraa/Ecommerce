
import "../styles/header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

  return (
    <>
      <header className="headerContainer">
        <nav className="navBar">
          <div className="logo">
            <h1>TEM<span>AQUI</span></h1>
          </div>

          <div className="iconsContainer">


            <div className="inputContainer">
              <input type="text" placeholder="Procurar" className="input-search"></input>
              <button className="searchButton">
                <FontAwesomeIcon icon={faSearch} />
              </button>

            </div>


            <button className="carButton">
              <FontAwesomeIcon icon={faShoppingCart} />
              <div className="products-count">
                0
              </div>
            </button>

            <button className="menuButton">
              <FontAwesomeIcon icon={faBars} />

            </button>



          </div>

        </nav>
      </header>
    </>
  )

}