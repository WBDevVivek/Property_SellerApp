import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// -----------------------------jsonData--------------

import cardDataJSON from "./data.json";

// -----------------------------jsonData--------------

const BldgStates = createContext();

export function BldgStateContext({ children }) {
  // ----------------------------------------------------------------------------------------

  const navigate = useNavigate();
  const location = useLocation();

  // ----------------------------------------------------------------------------------------

  var varForNavData = cardDataJSON.forNavData;
  var varForRowOneData = cardDataJSON.forRowOneData[0];
  var varForCardData = cardDataJSON.cardData;

  // ----------------------------------------------------------------------------------------

  const [allBldgData, setAllBldgData] = useState(varForCardData);

  const [viewMoreState, setViewMoreState] = useState(false);

  const [stateCategory, setstatCategory] = useState(varForCardData);

  const categoryFilter = (catName) => {
    const updateCategoryFilter = varForCardData.filter((ele) => {
      return ele.country === catName;
    });

    switch (catName) {
      case "View All":
        setViewMoreState(false);
        return setstatCategory(varForCardData);

      case "New York":
      case "Mumbai":
      case "Paris":
      case "London":
        setViewMoreState(false);
        return setstatCategory(updateCategoryFilter);

      default:
        setViewMoreState(false);
        return setstatCategory(varForCardData);
    }
  };

  // ----------------------------------------------------------------------------------------

  return (
    <BldgStates.Provider
      value={{
        // varForCardData,
        varForRowOneData,
        varForNavData,
        navigate,
        location,
        allBldgData,
        setAllBldgData,
        categoryFilter,
        viewMoreState,
        setViewMoreState,
        stateCategory,
        setstatCategory
      }}
    >
      {children}
    </BldgStates.Provider>
  );
}
export const AllContextState = () => {
  return useContext(BldgStates);
};
