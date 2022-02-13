import styled from "styled-components";

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

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 140px;
`
export const Box = styled.div`
width: 586px;
height: 300px;
display: flex;
justify-content: space-between;
background: #FBFBFB;
box-sizing: border-box;
position: relative;
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

// export const Button = styled.button`

// `

