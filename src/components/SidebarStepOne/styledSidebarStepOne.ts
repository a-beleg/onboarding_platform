import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";


export const FirstSection = styled.section`
  margin-bottom: 16px;
  margin-top: 32px;

  display: flex;
  flex-direction: column;

  @media all and (min-width: ${({theme}) => theme.breakpoints.sm + 'px'}) {
    align-items: center;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    flex-direction: row;
    align-items: initial;
    justify-content: space-between;

    margin-bottom: 72px;
    margin-top: 96px;
  }
  @media all and (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    margin-top: 106px;
  }
  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    margin-top: 88px;
    margin-bottom: 96px;
  }
`;
export const SecondSection = styled.section`
  margin-bottom: 36px;

  @media all and (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    margin-bottom: 78px;
  }
  @media all and (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    margin-bottom: 91px;
  }
`;

export const Title = styled.h1`
  font-family: 'Druk Cy', sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.TextPrimaryDark80};

  max-width: 328px;

  margin: 0 0 32px;

  @media all and (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    max-width: 344px;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    max-width: 360px;
  }
  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    font-size: 60px;
    max-width: 440px;
  }
`;

export const Picture = styled.div`
  width: 338px;
  height: 220px;
  background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 216 186'%3E%3Cpath d='m116 170.5-101.5-1.8-8.3-101c24-2 42.8 2.2 57.5 9.9l1.6.9-25.5 5-8 17.4 3.1 15.4v.4l-6.6 13 60.2-1.2 3.6-13.8-1.2-14 1.3 1.7a137 137 0 0 1 23.8 68Z' fill='%239F94E3' fill-opacity='.4'/%3E%3Cpath d='M104 85.3h-.3a.6.6 0 0 1-.2-.8c9.8-16.4 25-20 32.3-21.7.3-.1.6 0 .7.4 0 .3-.1.6-.5.7-7.1 1.7-22 5.2-31.5 21.2l-.5.2ZM110.2 93.8h-.2a.6.6 0 0 1-.4-.7l1.2-3.6c0-.3.4-.5.7-.4.3.1.5.5.4.8l-1.2 3.5c0 .3-.3.4-.5.4ZM52.6 135a.6.6 0 0 1-.1-1.2c0 .1 8.1-2 10.6-4.6.2-.3.6-.3.8 0 .3.2.3.5 0 .8-2.6 2.8-10.8 5-11.1 5h-.2ZM34.4 159.6a80 80 0 0 1-7.2-.8l-1.3 1h.2c2.7.5 5.4.8 8.2 1 .3 0 .6-.2.6-.5 0-.4-.2-.6-.5-.7ZM52.6 160a.6.6 0 0 1-.5-.4c0-.3.1-.6.5-.7C74 156.3 81.3 149.2 83 147c.2-.2.5-.3.8 0 .3.1.3.5 0 .8-2.1 2.8-9.7 9.6-31 12.3h-.2ZM26 144l-.7-.1c-1.6-.6-3.2-3-5.2-7.7-.5-1.3-.1-3.3 1.3-4.3 1.2-.8 4.5-1.2 9.4 3.5.2.2.2.6 0 .8-.3.3-.6.3-.9 0-3-3-6.3-4.4-7.8-3.3-1 .6-1.2 2-1 2.8 1.8 4.3 3.3 6.6 4.6 7 .3.2.7.2 1 0 .5-.3.2-2.7-.8-5.3-.1-.3 0-.7.4-.8.3 0 .6 0 .7.4.7 1.7 2 5.8.3 6.7l-1.2.3Z' fill='%235000B6'/%3E%3Cpath d='M27.5 143c-.2 0-.4-.1-.5-.3-.2-.3 0-.7.2-.8.7-.5 1.4-.7 2-.7.3 0 .6.2.7.5 0 .3-.3.6-.6.6-.4 0-1 .2-1.5.6h-.3ZM24.7 149.5a9 9 0 0 1-6.5-3c-3.3-3.4-4.4-5.5-4-7.3.4-1.7 2.1-2.9 6-4.3.4 0 .7.1.8.4.2.3 0 .7-.3.8-3.4 1.1-5 2.2-5.4 3.4-.3 1.3.9 3.2 3.8 6.1a8 8 0 0 0 5.6 2.7 6 6 0 0 0 4.4-1.8c.2-.2.6-.3.8 0 .3.2.3.6 0 .8a7.2 7.2 0 0 1-5.2 2.2Z' fill='%235000B6'/%3E%3Cpath d='M29 148.2c-.1-.4-.4-.6-.8-.5-.3 0-.5.4-.4.7.3 1.4-.2 2.7-1.2 3.5a4.8 4.8 0 0 1-5 .4c-2.9-1.4-5.8-5.8-5.4-9.3l-1-1v.3c-.9 4.2 2.5 9.4 5.9 11 .8.5 1.8.7 2.7.7 1.3 0 2.5-.4 3.5-1.1 1.4-1.2 2-2.9 1.6-4.8Z' fill='%235000B6'/%3E%3Cpath d='M24.4 157.6a7 7 0 0 1-.9 0c-4.4-.8-7.7-6.1-8-11.3-.1-.3.2.4.5.3.3 0 .6.2.6.6.3 3.6 3.7 8.6 7 9.2 1.5.2 2.8-.2 3.7-1.2.9-1 1.2-2.6.8-4-.1-.4 0-.7.4-.8.3-.1.6 0 .7.4.5 1.9.1 3.8-1 5.2-1 1-2.3 1.6-3.8 1.6Z' fill='%235000B6'/%3E%3Cpath d='m31.2 154.3-2-.2c-.1 0-.3 0-.4.2-.2 0-.2.3-.2.4v.9c0 1.3-1.4 3-3.2 3.3-2.4.5-4.8-1.7-6.6-6l-1.6-1.4v.5c2.5 7 5.8 8.2 7.7 8.2l.8-.1c2.4-.5 4.1-2.7 4.1-4.5v-.3l1.2.2c.4 0 .7-.2.7-.6 0-.3-.2-.6-.5-.6Z' fill='%235000B6'/%3E%3Cpath d='M43.2 163.7c-9 0-13.2-4.8-14.2-16.7a77.4 77.4 0 0 1-.4-8.3c0-.3.3-.5.6-.5s.6.2.6.6a106.5 106.5 0 0 0 .4 8c1 11.4 4.7 15.8 13 15.8 13 0 13.2-13.6 13.4-21v-3c.1-.3.4-.5.7-.5.3 0 .6.4.5.7v3c-.2 7-.4 22-14.6 22Z' fill='%235000B6'/%3E%3Cpath d='M29.4 141.7h-1.9a.6.6 0 0 1-.6-.6c0-.3.3-.6.6-.6h1.9c.3 0 .6.3.6.6s-.3.6-.6.6Z' fill='%235000B6'/%3E%3Cpath d='M43.2 145c-8 0-12.3-1.1-13.9-3.7-.4-.7-.7-1.6-.7-2.6 0-3.5 6.5-6.3 14.6-6.3 8.2 0 14.6 2.8 14.6 6.3 0 1.3-.6 2.4-1.7 3.3-2.4 2-7 3-12.9 3Zm0-11.4c-8 0-13.4 2.7-13.4 5.1 0 .8.2 1.4.5 2 1.8 2.9 8.3 3.2 13 3.2 5.4 0 9.9-1 12-2.8 1-.7 1.4-1.5 1.4-2.4 0-2.5-5.4-5.1-13.5-5.1Z' fill='%235000B6'/%3E%3Cpath d='M55.7 141.6c-2.3 1.8-7 2.9-12.5 2.9-6.3 0-11.6-.7-13.4-3.5 2.3-2 7-3.3 12.7-3.3 6 0 11.3 1.6 13.2 3.9ZM145 8c-8.7-.4-13.3 2-15.6 5.4-.9 1.3.3 3 1.8 2.7 1.7-.4 3.9-.7 6.2-.8 5 3.8 11.4 5.3 17.6 4.2 2.2 2.7 2.3 8.2 2.4 13.8 0 .9.5.4 1.4.4 1.2 0 2.1 0 3.5.3h1.9l.5-9.5c.5-9.4-5.6-15.7-19.7-16.4Z' fill='%235000B6'/%3E%3Cpath d='M158 34.1c3.5 0 6 .7 7.1 2 .6.5.8 1.3.8 2 0 .6-.2 1.6-1.1 2.4-1 .8-2.7 1.2-4.7 1-.3 0-.6.2-.6.6l-2.1 21.2c0 .2.1.5.4.6l1.2.5.9-1-1.3-.5 2-20.2c2.6.1 4.1-.6 5-1.4.9-.8 1.4-1.9 1.5-3 0-.9-.1-2-1.1-3.1-1.5-1.5-4.1-2.3-8-2.3-.3 0-.6.3-.6.6 0 .4.3.6.6.6ZM136.7 38.8c-1.5 0-2.6-.4-3.3-1.2-.5-.5-.6-1.2-.5-2 .3-1.6 2.6-2.2 3.7-2.4v-4.9c0-.3.3-.6.6-.6s.6.3.6.6v5.4c0 .3-.3.5-.6.6-1 .1-3 .6-3.1 1.5-.1.5 0 .8.2 1 .4.6 1.3.9 2.4.9.3 0 .6.2.6.6 0 .3-.3.5-.6.5ZM131.7 30.4v1.2c.2 1.5-2 1.7-2.3.2v-1.2c-.2-1.5 2.1-1.7 2.3-.2ZM147.5 30.8l.1 1.1c.2 1.5-2.1 1.8-2.3.3l-.1-1.2c-.2-1.5 2.2-1.7 2.3-.2ZM145 25.3l2.8.6c.7.2.2 1.3-.5 1l-2.6-.4c-.7-.1-.5-1.3.2-1.2ZM128 25.8l1.8-1.2c.6-.4 1.4.4.8.9l-2 1.3c-.7.4-1.3-.6-.7-1ZM144 44.2c1-.2 2.1-.6 2.2-1.6 0-.8 1.2-.8 1.1 0 0 1.6-1.5 2.5-3 2.7-.7.1-1-1-.2-1.1Z' fill='%235000B6'/%3E%3Cpath d='M160.7 12.6c-3.5-3-8.7-4.8-15.7-5.1-11.6-.6-17.8 3.8-18.4 13l-.4 5.8c-1.3 17.6-2 28.3 4 32.3 1.6 1 3.4 1.6 5.2 2v.1l-.2 5.2c0 .2 0 .4.2.5l.4.1c.4 0 7.6-1.2 9.3-5.1v-.6c-.1-.2-.3-.3-.5-.3-.1 0-9 .1-13.7-3-5.5-3.5-4.7-14-3.5-31.2l.4-5.7c.6-8.6 6.2-12.5 17.1-12 6.7.4 11.8 2 15 4.9a13 13 0 0 1 4.2 11 52 52 0 0 1-.8 10.4c.3.2.6.2.8 0 .5-.5.9-4 1.2-10.4.2-5-1.3-9-4.6-11.9Z' fill='%235000B6'/%3E%3Cpath d='M139.1 84.7h-.1a.6.6 0 0 1-.5-.4c-1.1-3.3-3.2-17.7-3.3-18.3a.6.6 0 0 1 1.1-.1c0 .1 1.9 12.6 3 17l18.3-20c.2-.2.5-.2.8 0 .2.2.2.6 0 .9l-18.9 20.7-.4.2ZM154.8 12a13.1 13.1 0 0 0-13.7-6c-2.1.4-2.9-.1-4.8-1-1.7-.6-3.4-1-5.2-1.1-2.5-.2-5.7 0-7.2 2.3-4 5.5 3.6 9.9 8 11 6.8 1.6 14 .2 19.8-3.8v-.1l3-.2c.7 0 .7-1 .1-1.1Z' fill='%235000B6'/%3E%3Cpath d='M203 114.4A73 73 0 0 0 158.5 63l-1.2.6c.1.1.2.3.4.3.4.1 36 12.5 44 50.8 4 18.7 2 33.2-5.3 41.8-5.1 6-13 9.1-22 8.6-11.1-.5-21.7-10-29.5-17-4.8-4.3-8.6-7.7-11.2-7.8-6.3-.3-7.2-1-8.3-3.2a.6.6 0 0 0-.8-.3c-.3.2-.4.5-.3.8 1.4 2.7 2.8 3.6 9.3 3.9 2.2.1 6 3.5 10.5 7.5 7.9 7 18.7 16.7 30.3 17.3h1.8a27 27 0 0 0 21-9c7.7-9 9.6-23.8 5.6-42.9Z' fill='%235000B6'/%3E%3Cpath d='M126 133.5c-2.6 0-4.6-.5-6.1-1.6a6.2 6.2 0 0 1-2.7-4.3c0-.3.2-.6.5-.6.3-.1.6.1.7.4a5 5 0 0 0 2.1 3.5c2.2 1.6 6.1 1.8 11.2.7a.6.6 0 0 1 .2 1.2c-2.2.5-4.1.7-5.9.7Z' fill='%235000B6'/%3E%3Cpath d='M129.7 138.2c-5.6 0-9.1-2.1-9.8-6 0-.3.2-.6.5-.6.3-.1.6.1.7.4.6 3.9 5 5.7 11.9 4.8a.6.6 0 0 1 .1 1.2l-3.4.2ZM157.6 131.4c.3 7.6-3.3 14.9-9.7 19-.7.5 0 1.5.6 1a22.6 22.6 0 0 0 10.2-19.1l-1.1-.9Z' fill='%235000B6'/%3E%3Cpath d='M179 124a62.1 62.1 0 0 0-9.3-18.1.6.6 0 0 0-.6-.2c-.2 0-.4.2-.4.5-.6 6 3.6 19.2 3.8 19.7.1.3.5.5.8.4.3-.1.4-.4.3-.7 0 0 0-.4-.3-1l1.8-7.2c1 2.1 2 4.5 2.7 7 2 6.8.2 12.1-2.4 14.2-1.9 1.5-4.2 1.6-6.4.3-8.2-4.7-24-16.4-27.3-21.4a15 15 0 0 0-10-6.1c-.3 0-.5 0-.7.3v.6l4.7 8c-1.6.5-5.9 2-10.8 2.7a10 10 0 0 1-7-1.3c-1-.6-2.1-1.1-3.4-1-1.3.3-1.6 1-1.7 1.5-.4 1.8 2.2 4.2 4.7 5.9 4.2 2.8 13 .9 13.4.8.4 0 .6-.4.5-.7 0-.3-.4-.5-.7-.5 0 0-8.8 1.9-12.6-.6-2.9-2-4.3-3.9-4.1-4.7 0-.2.3-.4.8-.5.8-.1 1.6.3 2.6.8 1.5.9 3.7 2 7.7 1.5a50 50 0 0 0 12-3.5v-.5l-4.4-7.4c2 .5 5.7 1.8 8 5.4 3.7 5.5 20.2 17.4 27.7 21.7 1.2.7 2.5 1.1 3.7 1.1 1.4 0 2.8-.5 4-1.4 3-2.5 5-8.2 2.8-15.5Z' fill='%235000B6'/%3E%3Cpath d='M168.7 140h-.3a.6.6 0 0 1-.2-.9c2.4-4.3 6.5-22.6 6.6-22.8 0-.3.3-.5.7-.4.3 0 .5.4.4.7-.2.8-4.2 18.7-6.7 23-.1.3-.3.4-.5.4ZM99.4 71a.6.6 0 0 0-.6-.2l-35.1 6.8-24.4 4.8c-.2 0-.3.1-.4.3l-8.3 17.8c-.1.2-.1.3 0 .4l3.1 15.5L27 130v.6c0 .2.3.3.5.3l61.6-1.2c.3 0 .5-.2.6-.5l3.7-14.3v-.2l-1-12.3-.6-6.9 7.8-24-.1-.6Zm-8.9 24.3v.2l.4 5.2 1.2 14-3.6 13.8-60.2 1.2 6.6-13v-.4L31.7 101l8.1-17.4 25.5-5L98.1 72l-7.6 23.2Z' fill='%235000B6'/%3E%3Cpath d='M131.6 112.5a.6.6 0 0 1-.6-.3l-5.5-11-19-8.6a.6.6 0 0 1-.2-.3l-8-20.7c0-.3.1-.7.4-.8.3-.1.7 0 .8.3l7.8 20.5 18.9 8.7.3.3 5.6 11c.1.4 0 .7-.3.9h-.2ZM108.8 185.3c-.2 0-.4 0-.5-.2a.6.6 0 0 1 0-.6l2.7-8-27.7-22.4a.6.6 0 0 1-.2-.4l-.3-20.4-4.2-3.6a.6.6 0 0 1 0-.8c.2-.2.6-.3.8 0l4.4 3.7.2.4.2 20.4 27.9 22.5c.2.2.3.4.2.7l-2.7 7.5 46.6-.6 4-13.9-20.4-21.8a.6.6 0 0 1-.2-.4v-2.7c0-.3.3-.6.6-.6s.6.3.6.6v2.5l20.4 21.8c.2.2.2.4.2.6l-4.2 14.6c0 .3-.3.4-.6.4l-47.8.7Z' fill='%235000B6'/%3E%3Cpath d='M83.7 154.2a.6.6 0 0 1-.6-.5c0-.3.2-.6.5-.6l56.5-6.3c.3 0 .6.2.7.5 0 .4-.2.6-.6.7l-56.5 6.2ZM111.7 177a.6.6 0 0 1-.6-.5c0-.4.2-.7.5-.7l49-7a.6.6 0 1 1 .3 1.2l-49 7h-.2ZM120 130.7l-.4-.2-36.2 2c-.3 0-.6.2-.6.5 0 .4.3.6.6.6l36.5-2c.3 0 .5-.1.5-.3l-.3-.3-.2-.3ZM91.8 104.4a.6.6 0 0 1-.6-.5c0-.3.2-.6.5-.7l34.2-3c.3 0 .6.3.6.6s-.2.6-.5.6l-34.2 3ZM34.3 117a.6.6 0 0 1 0-1.2l58.3-1.7c.4 0 .6.3.7.6 0 .3-.3.6-.6.6l-58.4 1.8ZM91.8 94.6a.6.6 0 0 1-.6-.5c0-.3.2-.6.5-.7l15-2c.4 0 .7.3.7.6s-.2.6-.5.7l-15 1.9h-.1ZM126 162.7a.6.6 0 0 1-.7-.5c0-.3.2-.6.5-.7l7.8-1.7c.3 0 .7.2.7.5s-.1.6-.4.7l-7.9 1.6ZM108.8 167a.6.6 0 0 1-.1-1.2l6.4-1.6c.3-.1.6 0 .7.4.1.3 0 .6-.4.7L109 167h-.2ZM101.7 144a.6.6 0 0 1-.6-.5c0-.3.2-.6.5-.6l11.7-1.1c.4 0 .6.2.7.5 0 .4-.3.6-.6.7l-11.7 1ZM111.3 114.4a.6.6 0 0 1-.6-.5c0-.3.3-.6.6-.6l11.4-.9c.4 0 .6.2.7.6 0 .3-.2.6-.6.6l-11.4.8ZM37 108.4a.6.6 0 0 1-.5-.5c0-.3.2-.6.5-.6l22.8-1.5c.3 0 .6.3.6.6s-.2.6-.5.6L37 108.4ZM63.7 88a.6.6 0 0 1-.6-.5c0-.4.2-.7.5-.7l7.1-.8A.6.6 0 0 1 71 87l-7.1.9h-.1ZM75.1 86.3a.6.6 0 0 1-.6-.5c0-.3.2-.6.6-.7l8.5-1c.3 0 .6.3.6.6s-.2.6-.5.6l-8.5 1ZM77.4 123H63.7a.6.6 0 0 1-.6-.7c0-.3.3-.6.6-.6h13.7c.4 0 .6.3.6.6s-.2.6-.6.6ZM31 101.4a.6.6 0 0 1-.5-.6c0-.3.2-.6.5-.6l60-5.3c.3 0 .6.2.7.5 0 .3-.3.6-.6.6l-60 5.4Z' fill='%235000B6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;

  @media all and (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    width: 338px;
    height: 220px;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    width: 376px;
    height: 245px;
  }
  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    width: 440px;
    height: 325px;
  }
`;
export const Download = styled.a`
  display: inline-block;
  cursor: pointer;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  color: ${({theme}) => theme.colors.CommonPrimaryDark80};

  background-image: url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 13.4v4.1C4 18.9 5.1 20 6.5 20h11c1.4 0 2.5-1.1 2.5-2.5v-4M12 16.7V4.5' stroke='%237927E1' stroke-linecap='round'/%3E%3Cpath d='m16 13.5-4 3.7-4-3.7' stroke='%237927E1' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right;
  background-size: 24px 24px;
  padding-right: 32px;

  margin: 0 0 28px;

  transition-property: box-shadow;
  transition-duration: .15s;
  transition-timing-function: ease-in-out;

  &:hover {
    box-shadow: inset 0px -1px 0 0px;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    margin-bottom: 36px;
  }
  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    font-size: 18px;
    line-height: 1.35;
  }
`;
export const GetLink = styled(motion(Link))`
  display: block;
  width: max-content;
  cursor: pointer;
  padding: 16px 24px;
  background-color: ${({theme}) => theme.colors.CommonPrimaryDark80};
  border-radius: 40px;
  border: none;
  margin-bottom: 16px;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({theme}) => theme.colors.TextPrimaryLight100};

  transition-property: transform;
  transition-duration: .1s;
  transition-timing-function: ease-in-out;

  &:active {
    transform: scale(.95);
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    margin-bottom: 0;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    font-size: 18px;
    line-height: 1.35;
  }
`;
export const LeftBlock = styled.div``;
export const RightBlock = styled.div``;

export const TitleSecondSection = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.03em;

  color: ${({theme}) => theme.colors.TextPrimaryDark80};

  margin: 0 0 26px;

  @media all and (min-width: ${({theme}) => theme.breakpoints.sm + 'px'}) {
    text-align: center;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.md + 'px'}) {
    text-align: left;
  }

  @media all and (min-width: ${({theme}) => theme.breakpoints.lg + 'px'}) {
    margin-bottom: 34px;
  }
  @media all and (min-width: ${({theme}) => theme.breakpoints.xl + 'px'}) {
    margin-bottom: 26px;
  }
`;
