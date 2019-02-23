import React, { Component } from 'react';
import Meta from './Meta';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
};

const GlobalStyle = createGlobalStyle`
  /* rubik-regular - latin */
    @font-face {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 400;
        src: url('/static/fonts/rubik-v8-latin-regular.eot'); /* IE9 Compat Modes */
        src: local('Rubik'), local('Rubik-Regular'),
            url('/static/fonts/rubik-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('/static/fonts/rubik-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('/static/fonts/rubik-v8-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('/static/fonts/rubik-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('/static/fonts/rubik-v8-latin-regular.svg#Rubik') format('svg'); /* Legacy iOS */
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
        height: 100%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'Rubik';
        background: linear-gradient(
            165deg,
            #e9eaef,
            #e0e3e6,
            #d6d6d6,
            #e7ccc9,
            #f7ada7,
            #d68588,
            #ca3884,
            #c7297b
        );
        color: ${props => props.theme.black};
        height: 100%;
        overflow-y: scroll;
    }
    #__next {
        height: 100%;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.black};
    }
    button {  font-family: 'Rubik'; }
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    background-color: white;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: stretch;
    min-height: 100%;
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <>
                    <Meta />
                    <Header />
                    <GlobalStyle />
                    <Inner>{this.props.children}</Inner>
                </>
            </ThemeProvider>
        );
    }
}

export default Page;
