import React from 'react'
import styled from 'styled-components';
import FlexContainer from './FlexContainer';
import SmallCardsContainer from '../Card/SmallCardsContainer';
import UserBackCard from '../User/UserBackCard';

const SytledMainContentWrapper = styled(FlexContainer)`
    gap: 30px;
`

const MainContentWrapper = () => {
    return (
        <SytledMainContentWrapper>
            <UserBackCard />
            <SmallCardsContainer />
        </SytledMainContentWrapper>
    )
}

export default MainContentWrapper;