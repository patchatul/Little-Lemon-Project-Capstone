import { Link } from "react-router-dom";
import foodpic from "../assets/fish.jpg";

function Header() {
    return (
        <header className="header">
            <section>
                <div className="header-description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant,
                        focused on traditional recipes with a modern twist.</p>
                </div>
                <div className="header-img">
                    <img src={foodpic} alt="little lemon restaurant"/>
                </div>
                <div className="header-button">
                    <Link to="/booking">
                        <button aria-label="On Click">Reserve a Table</button>
                    </Link>
                </div>
            </section>
        </header>
    )
}
export default Header;