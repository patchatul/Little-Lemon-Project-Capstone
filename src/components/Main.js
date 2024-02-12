import { Routes, Route, useNavigate } from "react-router-dom";
import ConfirmedBookingPage from "../pages/ConfirmedBookingPage";
import BookingPage from '../pages/BookingPage';
import Header from "./Header";
import { useReducer } from "react";

function Main() {
    const seededRandom = function (seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = (s * a) % m) / m;
        };
    };
    const fetchAPI = function (date) {
        let result = [];
        let dt = new Date(date);
        let seed = dt.getDate();
        let random = seededRandom(seed);

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = (formData) => {
        return true;
    };
    const navigate = useNavigate();
    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    const initialTimes = fetchAPI(new Date()); //initial state for the availableTimes
    const updateTimes = (date) => { //handle state change - change availableTimes based on the selected date.
        return fetchAPI(new Date(date));
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);




    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="/booking" element={<BookingPage
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm} />}></Route>
                <Route path="/confirmed" element={<ConfirmedBookingPage />}></Route>
            </Routes>
        </main>
    )
}
export default Main;