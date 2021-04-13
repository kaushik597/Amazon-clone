import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"

function Header() {
    return <nav className="header">
        {/* logo */}
        <Link to="/">
             <img className="header__logo" src="https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg"></img>

        </Link>

        {/* search bar */}
        <div className="header__search">
        <input class="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
        </div>

        {/* 3 links */}
        <div className="header__nav">
            {/* 1st link */}
                <Link path="">
                    <span>Hello Kaushik</span>
                    <span>Sign IN</span>
                </Link>

            {/* 2nd  link */}


            {/* 3rd link */}


             {/* 4th link */}

        </div>
       

    </nav>
}

export default Header
