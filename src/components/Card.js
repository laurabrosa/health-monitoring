import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../styles/Patient.module.scss";
import styled from "styled-components";
import Button from "./Button";

const CardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: pre-wrap;
  flex-direction: column;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  margin-left: 20px;
  width: 100%;
  max-width: 350px;
  min-width: 205px;
  height: 260px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  h4 {
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    max-width: 180px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    max-height: 70px;
  }
`;

const Card = ({
  cardText,
  cardColor,
  buttonLink,
  buttonText,
  buttonBgColor,
  buttonFocus,
  buttonHover,
  buttonTarget,
  bpmInfo,
  oxiInfo,
  tempiInfo,
}) => {
  return (
    <CardContainer color={cardColor}>
      <h4>{cardText}</h4>
      <div>
        <span className={styles.image}>
          <Image src="/bpm.svg" alt="bpm icon" width={25} height={25} />{" "}
        </span>
        <span className={styles.infoBPM}>{bpmInfo}</span>
        <span className={styles.imageOXI}>
          <Image src="/oxi.svg" alt="oximeter icon" width={20} height={20} />{" "}
        </span>
        <span className={styles.infoOXI}>{oxiInfo}</span>
      </div>
      <div>
        <span className={styles.image}>
          <Image src="/temp.svg"  alt="temperature icon" width={25} height={25} />{" "}
        </span>
        <span className={styles.infoTEMP}>{tempiInfo}</span>
      </div>
      <Button
        link={buttonLink}
        name={buttonText}
        target={buttonTarget}
        backgroundColor={buttonBgColor}
        borderColorFocus={buttonFocus}
        backgroundColorHover={buttonHover}
      />
    </CardContainer>
  );
};

Card.propTypes = {
  cardText: PropTypes.node.isRequired,
  cardColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  buttonBgColor: PropTypes.string.isRequired,
  buttonFocus: PropTypes.string.isRequired,
  buttonHover: PropTypes.string.isRequired,
  buttonTarget: PropTypes.string.isRequired,
  bpmInfo: PropTypes.string.isRequired,
  oxiInfo: PropTypes.string.isRequired,
  tempiInfo: PropTypes.string.isRequired,
};

export { Card as default };
