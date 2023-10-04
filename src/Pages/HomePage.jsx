import "../styles.css";
import React, { useState } from "react";

// -----------------------------------------

import { Container, Row, Button } from "react-bootstrap";

// -----------------------------------------

import HeaderComp from "../Component/HeaderComp";
import CardFullbody from "../Pages/CardFullbody";

// -----------------------------------------

import { AllContextState } from "../BldgStateContext";

// ----------------------------------------------

export default function HomePage() {
  const { viewMoreState, setViewMoreState } = AllContextState();

  return (
    <>
      <Container>
        <HeaderComp />
        <CardFullbody />
        <Row className="containerRow3">
          <Button
            variant="secondary"
            onClick={() => setViewMoreState(!viewMoreState)}
          >
            show More
          </Button>
        </Row>
      </Container>
    </>
  );
}
