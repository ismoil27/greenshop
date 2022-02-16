import React, { Component } from 'react';
import {mock, sizes, bodymenu, bodyboxes, buttonNumbers, Blogdata} from './mock'
import Cards from './Card';
import './body.css';
import { Container, Button, Arrow, Wrapper, Box, Image, Span, Title, Description, Div, Blogstext, BigText, Smalltext, BlogContainer, BlogCard, Blogimage, Blogcardtext, BlogtextWrapper, Blogbigtext, Blogsmalltext, Blogreadmoretext, Readwrapper, Arrowicon } from './style';
import salepic from './images/body-left/Super Sale.png';
import saleflower from './images/body-left/Left sale.png';
import strokeicon from './images/body-right/Stroke icon.svg';
import arrow from './images/body-right/Arrow right icon.svg';
import box1 from './images/body-right/Box_1.png'
import box2 from './images/body-right/Box_2.png'
import ellipse from './images/body-right/Ellipse 8.png'


// import blog1 from './images/Blogpics/Blog 01.png'



class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: mock, 
        active: 'All Plants',
        pics: bodyboxes,
        number: buttonNumbers,
        blogdata: Blogdata
        
    }
    }

    render() { 
        return (
             <div className='body'>
                <div className='flextest'>
                <div className='body--left '>
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
                    </div>   {/* rangeinput--div closed*/}

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
                </div>   {/* body--left div closed */}

                {/* body-right */}

                <div className='body--right'>
                    <div className='right--menu'>
                        <div className='bodymenu--links'>
                            {bodymenu.map(({id, menu}) => (
                                <ul key={id}>
                                <li onClick={() => this.setState({active: menu})}  className={`nav--links ${this.state.active === menu && 'activebody-menu'}`} >{menu}</li>
                                </ul>
                            ))}
                         </div>  {/* bodymenu--links closed */}
                        <div className='menubar'>
                            <span>Short by:</span>
                            <span> Default sorting</span>
                            <img src={strokeicon} alt="" />
                        </div> 

                        </div> {/* right--menu div closed */}
            
                        <div className='test'>
                    {
                        this.state.pics.map((value) => (
                            <Cards value={value}/>
                        ))
                    }
                        </div>
                 </div>  {/*body--right closed */}
            </div>
                    <Container>
                            {this.state.number.map((value)=>(
                                <Button>{value.btnnumber}</Button> 
                            ))}
                            <Arrow src={arrow}/>
                        </Container>
                        <Wrapper>
                            <Box>
                                <Image src={box1}/>
                                <Span src={ellipse} alt=''></Span>
                                <Div>
                                <Title>Summer Cactus  <br/>& Succulents</Title>
                                <Description>We are an online plant shop offering a wide range of cheap and trendy plants</Description>
                                <Button fontsize='15px' width='140px' height='40px' border='6px' margintop='20px' marginleft='auto'>Find More</Button>
                                </Div>
                            </Box>
                            <Box>
                            <Image src={box2}/>
                                <Span src={ellipse} alt=''></Span>
                                <Div>
                                <Title>Styling Trends <br /> & much more</Title>
                                <Description>We are an online plant shop offering a wide range of cheap and trendy plants</Description>
                                <Button fontsize='15px' width='140px' height='40px' border='6px' margintop='20px' marginleft='auto' >Find More</Button>
                                </Div>
                            </Box>
                        </Wrapper>

                        <Blogstext>
                            <BigText>Our Blog Posts</BigText>
                            <Smalltext>We are an online plant shop offering a wide range of cheap and trendy plants.</Smalltext>
                        </Blogstext>

                        <BlogContainer>
                            {Blogdata.map(({id, src, blogcardtext, blogbigtext, blogsmalltext, readmore, arrowicon}) => (
                                <BlogCard key={id}>
                                <Blogimage src={src} alt=''/>
                                <BlogtextWrapper>
                                    <Blogcardtext>{blogcardtext}</Blogcardtext>
                                    <Blogbigtext> {blogbigtext} </Blogbigtext>
                                    <Blogsmalltext> {blogsmalltext} </Blogsmalltext>
                                    <Readwrapper>
                                    <Blogreadmoretext> {readmore} </Blogreadmoretext>
                                    <Arrowicon />
                                    </Readwrapper>
                                </BlogtextWrapper>
                            </BlogCard>
                            ))}
                            
                        </BlogContainer>

        </div>
           

         );
    }
}
 
export default Body;