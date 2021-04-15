import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"></img>
       
       {/* Products  with id title price rating and image */}


        <div className="home__row">
        <Product id="1"
       title="test"
       price={100}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"/>
       

       <Product id="2"
       title="test"
       price={100}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"/>
       
        </div>

        <div className="home__row">
        <Product id="3"
       title="test"
       price={100}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"/>
       

       <Product id="4"
       title="test"
       price={100}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"/>
       

       <Product id="5"
       title="test"
       price={100}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"/>
            
        </div>

        <div className="home__row">
        <Product id="6"
       title="test"
       price={100}
       rating={5}
       image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"/>
            
        </div>

      
        </div>
    )
}

export default Home
