import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider'
import { auth } from './firebase';

function Header() {

 const [{basket,user}] = useStateValue();
 console.log(basket);

 const login =()=>{
   if(user){
     auth.signOut()
   }
 }

  console.log(useStateValue());
    return (
      <nav className="header">
        {/* logo */}
        <Link to="/">
          <img
            className="header__logo"
            src="https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg"
          ></img>
        </Link>

        {/* search bar */}
        <div className="header__search">
          <input class="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/* 3 links */}
        <div className="header__nav">
          {/* 1st link */}
          <Link to={!user && "/login" }className="header__link">
            <div onClick={login} className="header__option">
              <span className="header__optionLineOne">Hello {user?.email}</span>
              <span className="header__optionLineTwo">{user?'Sign out' : 'Sign in'}</span>
            </div>
          </Link>

          {/* 2nd  link */}

          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* 3rd link */}

          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          {/* 4th link */}

          <Link to="/checkout" className="header__link">
              <div className="header__optionBasket">
                  {/* basket icon */}
                  <ShoppingBasketIcon />
                  {/* items in basket */}
                  <span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>

              </div>
          </Link>
        </div>
      </nav>
    );
}

export default Header
