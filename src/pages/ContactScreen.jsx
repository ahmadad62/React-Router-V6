import "../App.css";
import { useLocation } from "react-router-dom";

export default function ContactScreen() {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get("name");
    console.log(name)
    return (
        <>
                <h2>Hey {name}, Contact us here...</h2>
            <div>
                <h2>Contact Information</h2>
                <p>Tel: +49123456789</p>
                <p>address: Bahstrasse 30, Hamburg</p>
            </div>
        </>
    )
}
