import "../styles.css";
import React, { useEffect, useState } from "react";

// -----------------------------------------

import { Row, Col, Button } from "react-bootstrap";

// -----------------------------------------

// -----------------------------------------

import { AllContextState } from "../BldgStateContext";

// ----------------------------------------------

export default function HeaderComp({}) {
  const { varForRowOneData, varForNavData, categoryFilter } = AllContextState();

  const [activeBTNState, setActiveBTNState] = useState({
    name: `${varForNavData[0]}`,
    value: 0
  });

  // console.log(activeBTNState);

  function navButoonFun(val, ind) {
    categoryFilter(val);
    setActiveBTNState({
      ...activeBTNState,
      name: val,
      value: ind
    });
  }

  return (
    <Row className="containerRow1">
      <Col>
        <h1>{varForRowOneData.heading}</h1>
      </Col>
      <Col>
        <p>{varForRowOneData.para}</p>
      </Col>
      <Col>
        <div className="navButtonClass">
          <div className="navButtonClassFirst">
            {varForNavData.map((val, ind) => {
              return (
                <Button
                  key={ind}
                  variant="secondary"
                  // active
                  onClick={() => navButoonFun(val, ind)}
                  className={
                    activeBTNState.value === ind ? "active" : "NotActive"
                  }
                >
                  {val}
                </Button>
              );
            })}
          </div>
          <div className="navButtonClassSecond">
            <Button
              variant="secondary"
              onClick={() => categoryFilter(varForNavData)}
            >
              View All
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
