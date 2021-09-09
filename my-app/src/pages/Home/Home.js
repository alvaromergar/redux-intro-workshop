import React from "react";

import SearchBar from "../../components/SearchBar";
import withLayout from "../../hoc/withLayout";

function Home ({
    // handleSearch,
    ...props
}) {
    return (
        <div>
            Hello World
            <div>
                <SearchBar
                    type="text"
                    id="search-home"
                    placeholder="Search"
                />
            </div>
        </div>
    );
}

export default withLayout(Home);