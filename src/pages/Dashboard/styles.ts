import styled from 'styled-components';

import {shade} from 'polished';

interface FormProps {
  hasError: boolean;
}


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2;
    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }

  img {
    width: 64px;
    height: 64px;

  }
`

export const Title = styled.h1`
  font-size: 44px;
  color: #3a3a3a;
  max-width: 561px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.div`
  margin-top: 80px;

  input {
    flex: 1;
    height: 70px;
    width: 700px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }

  }

  button {
    width: 210px;
    height: 70px;
    background: red;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, 'red')};
    }
  }

`


export const Pokedex = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    transition: transform 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
  }

  form{
    margin: 0 16px;
    flex: 1;
    height: 150px;
    border-radius: 30px;
    background: #fff;

    strong {
        font-size: 20px;
        color: #3d3d4d;
      }
    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
`
