import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { DummyManager } from "./DummyManager";
import alex from "../images/alex.jpg";
import janet from "../images/janet.jpg";
import john from "../images/john.jpg";
import michael from "../images/michael.jpg";
import monica from "../images/monica.jpg";

import sandra from "../images/sandra.jpg";
import plus from "../images/plus.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { CallApiCities } from "./CallApiCities";

export function SmartManager() {
  CallApiCities();
  useEffect(() => {
    if (Aos) {
      Aos.init({});
    }
  }, [Aos]);
  return (
    <>
      <Box style={{ backgroundColor: "white", padding: "30px" }}>
        <Box className="contactMain">
          <DummyManager
            picContact={john}
            profession="Graphics designer"
            name="John Smith"
            company="Twitter Inc"
            street="blabla"
            location="blabla"
            cityState="blabla"
            telefone="blabla"
            penIcon='"fas fa-pen"'
            binIcon="fas fa-trash"
          />

          <DummyManager
            picContact={alex}
            profession="CEO"
            name="Alex Johnatan"
            company="Twitter Inc"
            street="blabla"
            location="blabla"
            cityState="blabla"
            telefone="blabla"
            penIcon='"fas fa-pen"'
            binIcon="fas fa-trash"
          />

          <DummyManager
            picContact={monica}
            profession="Marketing manager"
            name="Monica Smith"
            company="Twitter Inc"
            street="blabla"
            location="blabla"
            cityState="blabla"
            telefone="blabla"
            penIcon='"fas fa-pen"'
            binIcon="fas fa-trash"
          />

          <DummyManager
            picContact={michael}
            profession="Sales manager"
            name="Michael Zimber"
            company="Twitter Inc"
            street="blabla"
            location="blabla"
            cityState="blabla"
            telefone="blabla"
            penIcon='"fas fa-pen"'
            binIcon="fas fa-trash"
          />

          <DummyManager
            picContact={sandra}
            profession="Graphics designer"
            name="Sandra Smith"
            company="Twitter Inc"
            street="blabla"
            location="blabla"
            cityState="blabla"
            telefone="blabla"
            penIcon='"fas fa-pen"'
            binIcon="fas fa-trash"
          />
          <DummyManager
            picContact={janet}
            profession="Graphics designer"
            name="Janet Carton"
            company="Twitter Inc"
            street="blabla"
            location="blabla"
            cityState="blabla"
            telefone="blabla"
            penIcon='"fas fa-pen"'
            binIcon="fas fa-trash"
          />

          <DummyManager
            picContact={alex}
            profession="CEO"
            name="Alex Johnatan"
            company="Twitter Inc"
            street="blabla"
            location="blabla"
            cityState="blabla"
            telefone="blabla"
            penIcon='"fas fa-pen"'
            binIcon="fas fa-trash"
          />

          <DummyManager
            picContact={john}
            profession="Graphics designer"
            name="John Smith"
            company="Twitter Inc"
            street="blabla"
            location="blabla"
            cityState="blabla"
            telefone="blabla"
            penIcon="fas fa-pen"
            binIcon="fas fa-trash"
          />

          <Box class="plusBox">
            <img src={plus} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
