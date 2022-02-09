import React, { Component } from 'react';
import {mock, sizes} from './mock'
import './body.css'
import '../Navbar/navbar.css'


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { data: mock, active: '' }
    }


    render() { 
        return (
            <div className='body'>
                <div className='body--left margin--m1'>
                    <h2>Categories</h2>
                    {
                        mock.map((value) => (
                            <div key={value.id} className='catogories'>
                                <p onClick={() => this.setState({active: value.id})}
                                 className= {`ct--title ${this.state.active  === value.id && 'active-categories'}`}>{value.title}</p>
                                <p onClick={() => this.setState({active: value.id})}
                                 className= {`ct--number ${this.state.active  === value.id && 'active-categories'}`}>({value.number})</p>
                                </div>
                        ))
                    }
                    <div className='rangeinput--div'>
                        <p className='price--text'>Price Range</p>
                        <input className='range-input range--padding' type="range" />
                        <p className='range-price range--padding'>Price: <span>$39 - $1230</span> </p>
                        <p className='btn range-btn range--padding'>Filter</p>
                    </div>
                   <h3>Size</h3>
                   {
                        sizes.map((value) => (
                            <div key={value.id} className='catogories'>
                                <p onClick={() => this.setState({active: value.size})}
                                 className= {`${this.state.active  === value.size && 'active-categories'}`} >{value.size}</p>
                                <p onClick={() => this.setState({active: value.size})}
                                 className= {`${this.state.active  === value.size && 'active-categories'}`}>({value.number})</p>
                                </div>
                        ))
                    }
                </div>
            </div>
         );
    }
}
 
export default Body;