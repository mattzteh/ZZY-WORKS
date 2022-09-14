import { useState } from "react";

const SearchBar = ({closeSearchBar}) => {
    const [query, setQuery] = useState("");

    return (
        <>
            <div className="search-page">

                <div className="search-bar-dropdown">
                    <input
                    placeholder="Search our store"
                    onChange={event => setQuery(event.target.value)}
                    />
                    <button onClick={() => closeSearchBar(true)}></button>
                </div>
                
            </div>
        </>
    )
}

export default SearchBar;