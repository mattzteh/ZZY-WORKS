import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSearchedProducts } from "../../store/products";
import './SearchBar.css'

const SearchBar = ({closeSearch}) => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    let path = "/search-results"


    const handleSubmit = (e) => {
        e.preventDefault();
        closeSearch(false)
        dispatch(getSearchedProducts(query))
        history.push(path)
    }

    const update = (field) => {
        return e => {
            switch (field) {
                case 'query':
                    setQuery(e.target.value)
                    break;
                default:
                    console.log('Field name error.');
                    break;     
            }
        }
    }

    return (
        <>
            <div className="search-page">

                <div className="search-bar-dropdown">
                    <form onSubmit={handleSubmit}>

                        <button
                        type="submit"
                        className="search-enter">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </button>

                        <input
                        autoFocus='autofocus'
                        value={query}
                        placeholder="Search our store"
                        onChange={update('query')}
                        />

                    </form>
                    <button onClick={() => closeSearch(false)}>x</button>
                </div>

            </div>
        </>
    )
}

export default SearchBar;