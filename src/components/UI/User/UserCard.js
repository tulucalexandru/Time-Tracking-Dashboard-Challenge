import React from 'react'
import styled from 'styled-components';
import { Colors } from '../../../GlobalStyles';
import userImage from "../../assets/images/image-jeremy.png";

const StyledUserCard = styled.div`
    width: 100%;
    height: 354px;
    background-color: ${Colors.blue};
    border-radius: 25px;
    padding: 30px;

    & img {
        width: 37.5%;
        border: 3px solid white;
        border-radius: 50%;
        margin-bottom: 45px;
    }

    & p {
        color: ${Colors.paleBlue};
        font-size: 14px;
    }

    & h1 {
        font-weight: 300;
        font-size: 35px;
        
    }
/* 
    & h1+h1 {
        margin-top: 1px;
    } */

    @media (max-width: 1100px) {
        height: 132px;
   
        & > p {
            margin-top: 20px;
        }
        &> p {
            display: inline-block;
        }

    

        & > h1+h1 {
            margin-left: 10px;
        }    
        
        & > h1 {
            display: inline;
        }

        & h1 {
            font-size: 22px;
        }

        & img {
            float: left;
            width: 30%;
            margin-right: 15px;
        }
    }
`

const UserCard = () => {
  return (
    <StyledUserCard>
        <img src={userImage} alt="" />
        <p>Report for</p>
        <h1>Jeremy</h1>
        <h1>Robson</h1>
    </StyledUserCard>
  )
}

export default UserCard;