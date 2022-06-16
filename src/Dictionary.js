import React,{useState} from "react";

export default function Dictionary(){

    let [keyword, setKeyword]=useState("");
    function handleSubmit(event){
        event.preventDefault();

        return(
        alert(`Searching for ${keyword} definition`))

    }
    function handleChangeKeyword(event){
        setKeyword(event.target.value)

    }
    return(
        <div className="Dictionary">
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleChangeKeyword} />
            </form>
        </div>
    )
}