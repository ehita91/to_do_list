import { useContext } from "react";
import { PersonContext } from "./PersonContext";

function Footer (){
        const person = useContext(PersonContext);
        return <div onClick={() => {
                person.setName("Mary")
        }}>Made by {person.name} 4Geeks</div>
}

export default Footer;