import logo from '../assets/colorlit.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-img">
                <img src={logo} alt="little lemon logo" width="100px"/>
            </div>
            <div className="footer-links">
                <p>Social Media</p>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                <p>Contact</p>
                <ul>
                    <li>Address: Chicago, Illinois</li>
                    <li>Phone number: ++ 0123 456 789</li>
                    <li>Email: LittleLemon@gmail.com</li>
                </ul>
            </div>
            <div className="footer-nav">
                <p>Navigation</p>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/booking">Reservation</a></li>
                    <li><a href="/reviews">Reviews</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;