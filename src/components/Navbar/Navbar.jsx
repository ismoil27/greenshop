import React, {Component} from 'react';
import navlogo from './logo.svg';
import search from './search.svg';
import cart from './cart.svg';
import {navbar} from './mock'
import './navbar.css' 

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          active: 'Home',
        }
    }
    
    render() { 
        return ( 
            <div className='navbar margin--m1'>
              <div className='logo--p1'>
                <img className='logo' src={navlogo} alt="" />
                <h3 className='navlogo-text'>GREENSHOP</h3>
              </div>
              <div className='links'>
              {navbar.map(({id, title}) => (
                <ul key={id}>
                  <li onClick={() => this.setState({active: title})}  className={`nav--links ${this.state.active === title && 'active'}`} >{title}</li>
                </ul>
              ))}
              </div>
              <div className='icons'>
                <img className='search--icon margin' src={search} alt="" />
                <img className='cart--icon margin' src={cart} alt="" />
                <p className='login--btn btn margin'>Login</p>
              </div>
            </div>
         );
    }
}
 
export default Navbar;


{/* <img className='logo' src={navlogo} alt="" />
                <h1 className='navlogo-text'>GREENSHOP</h1>
                <ul className='links'>
                    <li className='nav--links'>Home</li>
                    <li className='nav--links'>Shop</li>
                    <li className='nav--links'>Plant Care</li>
                    <li className='nav--links'>Blogs</li>
                </ul>
              <div className='icons'>
                <img className='search--icon margin' src={search} alt="" />
                <img className='cart--icon margin' src={cart} alt="" />
                <p className='login--btn margin'>Login</p>
              </div> */}
