import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = ({closeSearchBar}) => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch()
    }

    return (
        <>
            <div className="search-page">

                <div className="search-bar-dropdown">
                    <input
                    placeholder="Search our store"
                    onChange={event => setQuery(event.target.value)}
                    />
                    <button 
                    className="search-enter"
                    onClick={handleSubmit.then(() => closeSearchBar(true))}>
                    </button>
                </div>

            </div>
        </>
    )
}

export default SearchBar;