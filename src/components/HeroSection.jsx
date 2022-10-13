import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {Button} from '../styles/Button';

const HeroSection = () => {
  return (
    <Wrapper>
        <div>
            <div>
                <div>
                    <p>Welcome to</p>
                    <h1>E-c0m</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores veniam sit explicabo omnis fugit, delectus laboriosam facere obcaecati ut maxime perferendis molestiae sint aperiam corrupti, labore est error pariatur.
                    </p>
                    <NavLink>
                        <Button>show now</Button>
                    </NavLink>
                </div>
                <div>2</div>
            </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default HeroSection;