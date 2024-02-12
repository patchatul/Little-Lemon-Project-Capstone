import { useState } from "react";

function BookingForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState(
        props.availableTimes.map((times) => { return <option key={times}>{times}</option> }));
    const [guest, setGuest] = useState("1");
    const [occasion, setOccasion] = useState("");

    const clearForm = () => {
        setName("");
        setEmail("");
        setDate("");
        setTime("");
        setGuest("1");
        setOccasion("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        clearForm();
    }
    const formIsValid = () => {
        return (name.value.length > 2 &&
            email !== '' &&
            time !== '' &&
            date !== '' &&
            guest !== "0" &&
            occasion !== '')
    }


    return (
        <form onSubmit={handleSubmit} className="booking">
            <fieldset>
                <h1>Reservation Form</h1>
                <div className="form-area">
                    <div>
                        <label htmlFor="res-name">Enter your name<sup>*</sup>:</label>
                        <input id="res-name" type="text"
                            minLength={2} maxLength={30} placeholder="Jane Doe" required
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="res-email">Enter your email<sup>*</sup>:</label>
                        <input id="res-email" type="email" placeholder="LittleLemon@gmail.com" required
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="res-date">Choose date<sup>*</sup>:</label>
                        <input id="res-date" type="date" required
                            value={date} onChange={(e) => {
                                setDate(e.target.value)
                                props.dispatch(e.target.value)
                            }} />
                    </div>

                    <div>
                        <label htmlFor="res-time">Choose time<sup>*</sup>:</label>
                        <select id="res-time" required
                            value={time} onChange={(e) => setTime(e.target.value)}>
                                <option>17.00</option>
                                <option>17.30</option>
                                <option>18.00</option>
                                <option>19.00</option>
                                <option>21.00</option>
                                <option>21.30</option>
                                <option>23.30</option>
                            {props.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="guests">Number of guests<sup>*</sup>:</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests"
                            value={guest} onChange={(e) => setGuest(e.target.value)} required />
                    </div>

                    <div>
                        <label htmlFor="occasion">Occasion<sup>*</sup>:</label>
                        <select id="occasion"
                            value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className="form-button">
                    <button type="submit" aria-label="On Click" disabled={formIsValid} >
                        Make a Reservation
                    </button>
                </div>
            </fieldset>
        </form>
    )
}
export default BookingForm;