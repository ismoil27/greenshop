import styled from "styled-components";

import { ReactComponent as star } from "./shopimages/icons/Star.svg";

export const Container = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
`;

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 43px;
`;

export const PictureContainer = styled.div`
  display: flex;
  margin-right: 50px;
  width: 50%;
  /* height: 100%; */
`;
export const PictureLeft = styled.div`
  width: 30%;
  height: 100%;
  border-right: 2px solid blackc;
`;

export const PictureRight = styled.div`
  width: 70%;
  border-radius: 6px;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Images = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  background: #fbfbfb;
`;

export const ImageMain = styled.img`
  width: 404px;
  height: 404px;
  background: #fbfbfb;
`;

export const CartContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 28px;
  line-height: 16px;
  color: #3d3d3d;
`;
export const Price = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 16px;
  color: #46a358;
`;
export const Rate = styled.img``;

export const Description = styled.div`
  padding-top: 15px;
`;

export const GeneralButton = styled.button`
  width: 130px;
  height: 40px;
  background: #46a358;
  border-radius: 6px;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
  :hover {
    box-shadow: inset 0 -3em 3em #1c8b32, 0 0 0 2px #93e4a3,
      0.3em 0.3em 1em #93e4a3;
  }
  :active {
    transform: scale(0.97);
  }
`;
