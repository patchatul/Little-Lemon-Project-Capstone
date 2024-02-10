import { Link } from "react-router-dom";
import lit from "../assets/colorlit.png";

function ConfirmedBookingPage() {
    return (
        <section className="confirmed">
            <div>
                <h2>Your Reservation at Little Lemon restaurant<br /> has been confirmed!</h2>
                <img className="confirm-img1" src={lit} alt="Little Lemon restaurant" width="250px" />
                <div className="confirmed-link">
                    <Link to="/">
                        <button aria-label="On Click">Home</button>
                    </Link>
                    <Link to="/menu">
                        <button aria-label="On Click">Menu</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default ConfirmedBookingPage;