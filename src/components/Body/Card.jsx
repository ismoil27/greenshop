import React, { Component } from 'react';
import {mock, bodyboxes} from './mock'
import './body.css'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { data: mock, active: 'All Plants' }
    }

    render() { 
        const {value} = this.props
        return (
               <div className='body--rightcards'>
                                           
                            <div key={value.id} className='bodyright--pics'>
                                <div className='boxes'>
                                    <div className='boxes--img'>
                                        <img src={value.pic} alt="" />
                                    </div>
                                    <div className='box--texts'>
                                        <p className='flowers--name'>{value.flowername}</p>
                                        <p className='flower--price'>${value.flowerprice}</p>
                                    </div>
                                </div>

                            </div>    
                </div> 
            
         );
    }
}
 
export default Body;