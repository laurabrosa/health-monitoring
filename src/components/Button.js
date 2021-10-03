import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonContainer = styled.div`
  max-width: 190px;
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  a > button {
    padding: 0;
    margin-top: 20px;
    width: 100%;
    min-width: 180px;
    height: 35px;
    cursor: pointer;
    background: ${(props) => props.backgroundColor};
    border-radius: 10px;
    border: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 10.5px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 25px;

    &:focus {
      outline: none;
      border-radius: 10px;
      border: 2px solid;
      border-color: ${(props) => props.borderColorFocus};
      filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.1));
    }

    &:hover {
      text-decoration: none;
      background: ${(props) => props.backgroundColorHover};
      transition: background-color 0.1s;
      filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.15));
    }
  }
`;

const Button = ({
  link,
  name,
  target,
  backgroundColor,
  borderColorFocus,
  backgroundColorHover,
}) => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      borderColorFocus={borderColorFocus}
      backgroundColorHover={backgroundColorHover}
    >
      <a href={link} target={target}>
        <button type="button">{name}</button>
      </a>
    </ButtonContainer>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  borderColorFocus: PropTypes.string.isRequired,
  backgroundColorHover: PropTypes.string.isRequired,
};

export { Button as default };
