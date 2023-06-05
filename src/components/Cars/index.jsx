import React from "react";
import { useOutlet, Outlet, useNavigate } from "react-router-dom";
import { Wrap, Box } from "../style";

const Cars = () => {
  const hasOutlet = useOutlet();
  const navigate = useNavigate();
  return (
    <div>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <Wrap>
          <Box onClick={() => navigate("/cars/bmw")}>Bmw</Box>
          <Box onClick={() => navigate("/cars/audi")}>audi</Box>
        </Wrap>
      )}
    </div>
  );
};

export default Cars;
