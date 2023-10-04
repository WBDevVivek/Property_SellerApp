import "../styles.css";
import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

// -----------------------------------------

import { Container, Button } from "react-bootstrap";

// -----------------------------------------

import CardColComp from "../Component/CardColComp";

import { AllContextState } from "../BldgStateContext";

// ------------------------------------------------------

export default function CardIndividual({}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cartId, setCartId] = useState(id);

  const { stateCategory, setstatCategory } = AllContextState();

  useEffect(() => {
    setCartId(id - 1);

    setstatCategory(stateCategory);
  }, []);

  return (
    <Container className="cardIndividualContainer">
      <CardColComp cardDataval={stateCategory[cartId]} />

      <Button
        variant="secondary"
        onClick={() => {
          navigate(`/`);
        }}
      >
        goHome
      </Button>
    </Container>
  );
}
