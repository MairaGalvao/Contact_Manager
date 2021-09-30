import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

export function DummyManager({
  picContact,
  profession,
  name,
  company,
  street,
  cityState,
  telefone,
  binIcon,
  penIcon,
  plus,
  location,
}) {
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);

  return (
    <Box class="box">
      <Box class="picProf">
        <img class="picture" src={picContact}></img>
        <p
          style={{
            fontWeight: "500",
            textAlign: "center",
            paddingRight: "50px",
          }}
        >
          {profession}
        </p>
      </Box>
      <Box class="nameLoc">
        <p style={{ fontWeight: "bold" }}>{name}</p>
        <p>{location}</p>

        <Box class="text">
          <p style={{ fontWeight: "bold" }}>{company}</p>
          <p>{street}</p>
          <p>{cityState}</p>
          <p>{telefone}</p>

          {/* 
        <Box>
          <i>{penIcon}</i>
          <i>{binIcon}</i>
        </Box> */}
        </Box>
        <Box class="boxIcons">
          <i class="fa fa-pencil"></i>

          <i class="fa fa-trash"></i>
        </Box>
      </Box>
    </Box>
  );
}
