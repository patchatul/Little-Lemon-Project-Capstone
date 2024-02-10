import foodpic from "../assets/foodpic.jpg";
import pasta from "../assets/pasta.jpg";
function About() {
    return (
        <section className="about">
            <div className="about1">
                <h2>About Little Lemon</h2>
                <p>Address: Chicago, Illinois</p>
                <p>Phone number: ++ 0123 456 789</p>
                <p>Email: LittleLemon@gmail.com</p>
            </div>
            <div className="about-img">
                <div className="about-img1">
                    <img src={pasta} alt="pasta" />
                </div>
                <div className="about-img2">
                    <img src={foodpic} alt="little lemon's food" />
                </div>
            </div>
            <div className="about2">
                <p className="about-p2">We are a family owned Mediterranean restaurant,
                    focused on traditional recipes with a modern twist.
                    Little Lemon is owned by two Italian brothers,
                    Mario and Adrian, who moved to the United States
                    to pursue their shared dream of owning a restaurant.</p>
            </div>
        </section>
    )
}
export default About;