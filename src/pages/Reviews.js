import UserProfile from "./UserProfile";
import star from "../assets/star.png"

function Reviews() {
    return (
        <section className="reviews">
            <h2>Reviews</h2>
            <div className="review-container">
                {UserProfile.map(UserProfile => <div key={UserProfile.id}>
                    <div className="review-items">
                        <p>Rating: <img src={star} alt="star" /><img src={star} alt="star" />
                            <img src={star} alt="star" /><img src={star} alt="star" /><img src={star} alt="star" />
                        </p>
                        <img src={UserProfile.image} className="profile-img" alt="user profile" />
                        <p className="review-italic">"{UserProfile.description}"</p>
                        <p>- {UserProfile.name}</p>
                    </div>
                </div>)}
            </div>
            <button>View All Reviews</button>
        </section>
    )
}
export default Reviews;