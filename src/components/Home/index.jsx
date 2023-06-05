import React from "react";
import { data } from "../utils";
import { Wrap, Box } from "../style";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      {data.map(
        ({ id, path, title, hidden }) =>
          !hidden && (
            <Box onClick={() => navigate(path)} key={id}>
              {title}
            </Box>
          )
      )}
    </Wrap>
  );
};

export default Home;
