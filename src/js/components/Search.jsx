import React from "react";

const Search = () => {
    return(
        <>
        <div className="container top-search">
            <form className="form-inline">
                <div className="input-container">
                    <input type="text" className="form-control search-input" id="searchInput" placeholder="Search..." />
                </div>
            </form>
        </div>
        </>
    )
}

export default Search;