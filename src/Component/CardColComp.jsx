import "../styles.css";
import React from "react";

import { useNavigate } from "react-router-dom";
// -----------------------------------------

import { Col, Button, Card } from "react-bootstrap";

// -----------------------------------------

// -----------------------------reactIcons--------------

import { IoLocationOutline } from "react-icons/io5";

import { BsCurrencyDollar } from "react-icons/bs";

import { AiOutlineHeart } from "react-icons/ai";
import FourIconComp from "./FourIconComp";
import { AllContextState } from "../BldgStateContext";

// -----------------------------reactIcons--------------

export default function CardColComp({ cardDataval }) {
  const navigate = useNavigate();

  const { location } = AllContextState();

  return (
    <Col
      onClick={() => {
        location.pathname === "/"
          ? navigate(`property/${cardDataval?.id}`)
          : navigate("/");
      }}
    >
      {/* -------------for Card-------------- */}

      <Card style={{}}>
        {/* ------------------------------------------------ */}
        <div className="rentSaleDiv">
          <Button variant="primary showThis ">
            {cardDataval?.forRentSale}
          </Button>
          <Button variant="primary  hideThis">For Sale</Button>
          <div className="heartIconDiv">
            <AiOutlineHeart size={20} color="" />
          </div>
        </div>

        {/* ------------------------------------------------ */}

        <div className="otherDetailsDiv">
          <Card.Img variant="top" src={cardDataval?.cardImg} />

          {/* ------------------------------------------------ */}

          <div
            className={
              cardDataval?.popularTrueFalse
                ? "popularDiv"
                : "popularDiv visibilityFalse"
            }
          >
            <span className="popularDivSpan">Popular</span>
          </div>

          {/* ------------------------------------------------ */}

          {/* ------------------------------------------------ */}

          <div className="fourDotDiv">
            <div className="forDotDivCircle1 active"></div>
            <div className="forDotDivCircle1"></div>
            <div className="forDotDivCircle1"></div>
            <div className="forDotDivCircle1"></div>
          </div>

          {/* ------------------------------------------------ */}

          {/* ------------------------------------------------ */}

          <div className="locationDiv">
            <span className="locationDivSpan1">
              <IoLocationOutline size={20} color="#bdc3c7" />
            </span>
            <span className="locationDivSpan2">
              {cardDataval?.lacationPara}
            </span>
          </div>

          {/* ------------------------------------------------ */}

          <Card.Body>
            <Card.Title>{cardDataval?.cardTitle}</Card.Title>
            {/* ------------------------------------------------ */}
            <FourIconComp />
            {/* ------------------------------------------------ */}

            <div className="lastDiv">
              {/* ------------------------------------------------ */}

              <div className="lastDivFirst">
                <span className="span1">
                  <BsCurrencyDollar size={20} color="" />
                </span>
                <span className="span2">{cardDataval?.price}</span>
                <span className="span3">/month</span>
              </div>
              {/* ------------------------------------------------ */}
              <div className="lastDivSec">
                <Button variant="primary">Read More</Button>
              </div>

              {/* ------------------------------------------------ */}
            </div>
          </Card.Body>
        </div>
      </Card>

      {/* -------------for Card-------------- */}
    </Col>
  );
}
