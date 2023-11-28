import React from "react";

/*
Must be done. 
This should have been an Input button given we have no
 submit button. On user click, we should display the different 
 articles with keywords. 
*/
const Search = () => {
    return(
        <>
        <div className="container top-search">
            <form className="form-inline">
                <div className="input-container">
                    <input type="text" 
                    className="form-control search-input" 
                    id="searchInput" 
                    placeholder="Search..." />
                </div>
            </form>
        </div>
        </>
    )
}

export default Search;