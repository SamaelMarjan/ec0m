import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {Button} from '../styles/Button';

const HeroSection = ({myData}) => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>{myData.name}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores veniam sit explicabo omnis fugit, delectus laboriosam facere obcaecati ut maxime perferendis molestiae sint aperiam corrupti, labore est error pariatur.
                    </p>
                    <NavLink>
                        <Button>show now</Button>
                    </NavLink>
                </div>
                <div className='hero-section-image'>
                    <figure>
                        <img src='images/hero.jpg' alt='img' className='img-style' />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
    padding: 12rem 0;

    img {
        min-width: 10rem;
        height: 10rem;
    }

    .hero-section-data {
        p {
            margin: 2rem 0;
        }

        h1 {
            font-weight: bold;
        }

        .intro-data {
            margin-bottom: 0;
        }
    }

    .hero-section-image {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    figure {
        position: relative;

        &::after {
            content: "";
            width: 60%;
            height: 80%;
            background-color: rgba(81, 56, 238, 0.4);
            position: absolute;
            left: 50%;
            top: -5rem;
            z-index: -1;
        }
    }

    .img-style {
        width: 100%;
        height: auto;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        padding: 3rem;

        .grid {
            gap: 10rem;
            display: flex;
            flex-direction: column;
        }

        figure::after {
            content: "";
            width: 50%;
            height: 100%;
            left: 0;
            top: 10%;
            background-color: rgba(81, 56, 238, 0.4);
        }
    }
`;

export default HeroSection;