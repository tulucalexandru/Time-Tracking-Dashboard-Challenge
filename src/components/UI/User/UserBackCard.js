import React from 'react'
import FlexContainer from '../General/FlexContainer';
import styled from 'styled-components';
import { Colors } from '../../../GlobalStyles';
import UserCard from './UserCard';
import ButtonsContainer from './ButtonsContainer';

const StyledUserBackcard = styled(FlexContainer)`
    background-color: ${Colors.darkBlue};
    flex-direction: column;
    justify-content: space-between;
    width: 253px;
    position: relative;
    border-radius: 25px;
`

const UserBackCard = () => {
  return (
    <StyledUserBackcard>
      <UserCard />
      <ButtonsContainer />
    </StyledUserBackcard>
  )
}

export default UserBackCard;