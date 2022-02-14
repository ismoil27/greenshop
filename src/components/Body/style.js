import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 140px;
`

export const Container = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 90px;
box-sizing: border-box;
/* margin-left: auto; */

`
export const Button = styled.button`
width: ${(props)=> props.width ? `${props.width}` : `35px`};
height: 35px;
font-family: sans-serif;
background-color: #46A358;
border-radius: ${(props)=>props.border ? `${props.border}` : `4px` };
outline: none;
border: 0;
font-weight: bold;
font-size: ${(props)=> props.fontsize ? `${props.fontsize}` : `18px`};
color: #fff;
margin-right: 10px;
margin-left: ${(props)=> props.marginleft ? `${props.marginleft}` : `0px`};
margin-top: ${(props)=> props.margintop ? `${props.margintop}` : `0px`};
:active{
    transform: scale(0.97);
}
:hover{
    box-shadow:   inset 0 -3em 3em #1c8b32,
    0 0  0 2px #93e4a3,
    0.3em 0.3em 1em  #93e4a3;
}
`

export const Arrow = styled.img`
border: 1px solid #000;
padding: 10px;
border-radius: 4px;
box-sizing: border-box;
:active{
    transform: scale(0.97);
    background-color: #46A358;
    color: #fff;
}
`

export const Box = styled.div`
width: 586px;
height: 300px;
display: flex;
justify-content: space-between;
background: #FBFBFB;
box-sizing: border-box;
position: relative;
:hover{
    box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
}
`

export const Image = styled.img`
width: 292px;
height: 292px;
`

export const Span = styled.img`
position: absolute;
left: 0;
bottom: 0;
`

export const Title = styled.div`
font-size:24px;
font-weight: bold;
color: #000;
/* line-height: 18px; */
margin-left: auto;
`

export const Div = styled.div`
display: flex;
flex-direction: column;
padding: 30px 30px 30px 0;
`

export const Description = styled.div`
font-family: sans-serif;
line-height: 25px;
font-size: 16px;
font-weight: 300;
margin-left: auto;
margin-top: 10px;
`

export const Blogstext = styled.div`
text-align: center;
margin-top: 130px;
`

export const BigText = styled.div`
font-size: 24px;
font-weight: 600;
font-family: 'Cera Pro', sans-serif;
`

export const Smalltext = styled.div`
font-size: 16px;
font-weight: normal;
margin-top: 15px;
color: #727272;
font-family: 'Cera Pro', sans-serif;
`

export const BlogContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 35px;
`

export const BlogCard = styled.div`
width: 268px;
height: 400px;
`

export const Blogimage = styled.img`
width: 100%;
`
export const Blogcardtext = styled.div`
color: #46A358;
font-family: Cera Pro, sans-serif;
font-weight: 500;
font-size: 14px;

`


