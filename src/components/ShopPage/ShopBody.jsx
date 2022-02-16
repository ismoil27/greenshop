import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import './shopbody.css';
import { shopdata, stars } from './mockdata';
import mainactive from './shopimages/mainactive 1.png'
import { CartContainer, Container, ImageMain, Images, PictureContainer, PictureLeft, PictureRight, Price, ProductContainer, Rate, Title } from './shopstyle';


class ShopBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flowers: shopdata,
            img: mainactive,
            rate: stars,
        }

    }
    render() { 
        // const getElement = value => {

        // }

        return (  
            <div>
                <Navbar/>
           <Container>
               <div>
                 <p className='Homeshoptext'> <span>Home</span> / Shop</p>
               </div>
               <ProductContainer>
                    <PictureContainer>
                            <PictureLeft>
                                {
                                    this.state.flowers.map(({id, src}) => (
                                    <div key={id}>
                                        <Images onClick={()=>this.setState({img: src})} src={src} alt=''/>
                                    </div>
                                    ))
                                }
                            </PictureLeft>
                            <PictureRight>
                               <ImageMain src={this.state.img} alt=''/>
                            </PictureRight>
                    </PictureContainer>
                    <CartContainer>
                        <Title>
                            {this.props.title}
                        </Title>
                        <div className='pricerate'>
                        <Price>
                            ${this.props.price}
                        </Price>
                        <div className='stars'>
                        {   

                            stars.map(({id, src})=>(

                                <Rate src={src} alt='test'/>
                               
                            ))

                    
                        }
                        <span>19 Customer Review</span>
                         </div> 
                        
                        </div>


                    </CartContainer>
               </ProductContainer>
           </Container>
            </div>
        );
    }
}
 
export default ShopBody;