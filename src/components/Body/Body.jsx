import React, { Component } from 'react';
import {mock, sizes, bodymenu, bodyboxes} from './mock'
import './body.css'
// import '../Navbar/navbar.css'
import salepic from './images/body-left/Super Sale.png';
import saleflower from './images/body-left/Left sale.png';
import strokeicon from './images/body-right/Stroke icon.svg';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { data: mock, active: 'All Plants' }
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
                   <h3 className='size--text'>Size</h3>
                   {
                        sizes.map((value) => (
                            <div key={value.id} className='catogories'>
                                <p onClick={() => this.setState({active: value.size})}
                                 className= {`ct--title ${this.state.active  === value.size && 'active-categories'}`} >{value.size}</p>
                                <p onClick={() => this.setState({active: value.size})}
                                 className= {`ct--number ${this.state.active  === value.size && 'active-categories'}`}>({value.number})</p>
                                </div>
                        ))
                    }
                    <div className='bodyleft--pics'>
                        <img src={salepic} alt="" />
                        <p className='saletext'>UP TO 75% OFF</p>
                        <img src={saleflower} alt="" />
                    </div>
                </div>

                {/* body-right */}

                <div className='body--right'>
                    <div className='right--menu'>
                        <div className='bodymenu--links'>
                            {bodymenu.map(({id, menu}) => (
                                <ul key={id}>
                                <li onClick={() => this.setState({active: menu})}  className={`nav--links ${this.state.active === menu && 'activebody-menu'}`} >{menu}</li>
                                </ul>
                            ))}
                         </div>
                        <div className='menubar'>
                            <span>Short by:</span>
                            <span> Default sorting</span>
                            <img src={strokeicon} alt="" />
                        </div> {/* right--menu div closed */}
                    </div>
                        <div className='test'>
                    {
                        bodyboxes.map(({id, pic, flowername, flowerprice}) => (
                            <div key={id} className='bodyright--pics'>
                                <div className='boxes'>
                                    <div className='boxes--img'>
                                        <img src={pic} alt="" />
                                    </div>
                                    <div className='box--texts'>
                                        <p className='flowers--name'>{flowername}</p>
                                        <p className='flower--price'>${flowerprice}</p>
                                    </div>
                                </div>


                            </div>
                        ))
                    }
                    </div>
                </div> 
            </div>
         );
    }
}
 
export default Body;