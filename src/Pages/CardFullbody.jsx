import "../styles.css";
import React from "react";

// -----------------------------------------

import { Row } from "react-bootstrap";
import CardColComp from "../Component/CardColComp";
import { AllContextState } from "../BldgStateContext";

// -----------------------------------------

// -------------------------------------------------------

export default function CardFullbody({}) {
  const { allBldgData, viewMoreState, stateCategory } = AllContextState();

  return (
    <Row className="containerRow2">
      <Row>
        {/* ------------------------------------forCardMap-------------------------------------------------------------- */}

        {!viewMoreState
          ? stateCategory
              .slice(0, 6)
              .map((val, ind) => <CardColComp cardDataval={val} key={ind} />)
          : allBldgData.map((val, ind) => (
              <CardColComp cardDataval={val} key={ind} />
            ))}

        {/* ------------------------------------forCardMap-------------------------------------------------------------- */}
      </Row>
    </Row>
  );
}
