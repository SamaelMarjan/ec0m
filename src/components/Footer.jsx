import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {FaGithub, FaLinkedin, FaYoutube} from 'react-icons/fa';

import {Button} from '../styles/Button';

const Footer = () => {
  return (
    <Wrapper>
        <section className='contact-short'>
            <div className='grid'>

                <div>
                    <h3>Ready to get started?</h3>
                    <h3>Talk to us today</h3>
                </div>

                <div>
                    <Button>
                        <NavLink to='/'>Get Started</NavLink>
                    </Button>
                </div>

            </div>
        </section>

        <footer>
            <div className='container grid grid-four-column'>
                <div className='footer-about'>
                    <h3>E-c0m</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className='footer-subscribe'>
                    <h3>Subscribe to get important updates</h3>
                    <from>
                        <input type='email' name='email' placeholder='YOUR E-MAIL' />
                        <input type='submit' value='subscribe' />
                    </from>
                </div>
                <div className='footer-social'>
                    <h3>Follow Us</h3>
                    <div className='footer-social-icons'>
                        <div>
                            <a href='https://www.linkedin.com' target='_blank' rel="noreferrer">
                                <FaLinkedin className='icons' />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.github.com' target='_blank' rel="noreferrer">
                                <FaGithub className='icons' />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.youtube.com' target="_blank" rel="noreferrer">
                                <FaYoutube className='icons' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footer-contact'>
                    <h3>Call Us</h3>
                    <h3>+880 XXXXXXXX</h3>
                </div>
            </div>

            <div className='footer-bottom-section'>
                <hr />
                <div className='container grid grid-two-column'>
                    <p>
                        @{new Date().getFullYear()} E-c0m. All Rights Reserved
                    </p>
                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITIONS</p>
                    </div>
                </div>
            </div>
        </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
    .iSFIGq {
        margin: 0;
    }

    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({theme}) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({theme}) => theme.colors.shadowSupport};
        transform: translateY(50%);

        .grid {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    footer {
        padding: 14rem 0 9rem 0;
        background-color: ${({theme}) => theme.colors.footer_bg};

        h3 {
            color: ${({theme}) => theme.colors.hr};
            margin-bottom: 2.4rem;
        }

        p {
            color: ${({theme}) => theme.colors.white};
        }

        .footer-social-icons {
            display: flex;
            gap: 2rem;

            div {
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({theme}) => theme.colors.white};

                .icons {
                    color: ${({theme}) => theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }
    }

    .footer-bottom-section {
        padding-top: 9rem;

        hr {
            margin-bottom: 2rem;
            color: ${({theme}) => theme.colors.hr};
            height: 0.1px;
        }
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
        .contact-short {
            max-width: 80vw;
            margin: 4.8rem auto;
            transform: translateY(0%);
            text-align: center;

            .grid div:last-child {
                justify-self: center;
            }

            
        }

        footer {
            padding: 9rem 0 9rem 0;
        }

        .footer-bottom--section {
            padding-top: 4.8rem;
        }
    }
`;

export default Footer;