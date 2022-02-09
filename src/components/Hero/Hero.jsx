import React, {Component} from 'react';
import hero1 from './hero1.png';
import hero2 from './hero2.png';
import './hero.css';
import '../Navbar/navbar.css'

class Hero extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='hero-section margin--m1'>
                <div className='hero--texts'>
                    <h4 className='herosmall--text'>Welcome to GreenShop</h4>
                    <h1>Let’s Make a Better <span>Planet</span></h1>
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <button className='hero-btn btn'>Shop Now</button>
                </div>
                <ul className='btns'>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                <div className='hero--pics'>
                    <img className='hero--small' src={hero2} alt="" width={135} height={135}/>
                    <img src={hero1} alt="" />  
                </div>
            </div>
           
         );
    }
}
 
export default Hero;
