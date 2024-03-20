import { useState } from "react";

function Name(props){
    const [name, setName]=useState(props.firstName);
    const handleChange = (event) => {
        setName(event.target.value);
        };
    return (
        <div>
            <label htmlFor="search">Give the name: </label>
            <input id="search" type="text" onChange={handleChange} />
            <p>
                Searching for <strong>{name}</strong>.
            </p>
        </div>
        );
        
    }

    export default Name