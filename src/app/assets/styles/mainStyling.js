import styled, { keyframes } from 'styled-components';
import { Card } from '@bootstrap-styled/v4';
import { Link } from 'react-router-dom';
import { souseMediaQueries } from './mediaQueries';

export const CardContainer = styled.div `
    opacity: ${props => props.theme.themeOpacity}; 
`;

export const MainCard = styled(Card) `
    &.card {
        display: block;
        z-index: 9999;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: auto;
        opacity: ${props => props.theme.themeOpacity}; 
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.black};
    }
`;