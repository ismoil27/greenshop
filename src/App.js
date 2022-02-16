import React, {Component} from 'react';
// import Navbar from './components/Navbar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import ShopBody from './components/ShopPage/ShopBody';

// import logo from './logo.svg'


class App extends Component {
    render() { 
        return ( 
            <div>
                <Navbar />
                <Hero />
                <Body />
                <ShopBody title= 'Barberton Daisy' price='119.00'/>
            </div>
         );
    }
}
 
export default App ;