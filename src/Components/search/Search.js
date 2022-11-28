import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  IconWrapper,
  Input,
  InputWrapper,
  Label,
  SearchContainer,
} from "./Search.style";
import { ImLocation, ImUser } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { ChangeCity } from "../../UseCity";

export default function Search() {
  const FormChangeFunction = useContext(ChangeCity);
  const setCity = FormChangeFunction[1];
  const [destination, setDestination] = useState();

  const onChangeHandle = (e) => {
    setDestination(e.target.value);
    setCity(e.target.value);
  };

  const Navigate = useNavigate();

  const OnsubmitHandle = (e) => {
    e.preventDefault();

    // setCity(destination);
    Navigate("/destination");
  };
  return (
    <SearchContainer>
      <Form>
        <Fade cascade direction="right" delay={500} triggerOnce={true}>
          <InputWrapper>
            <IconWrapper>
              <ImLocation
                style={{
                  color: "var(--clr-primary)",
                  fontSize: "22px",
                  borderRadius: "50%",
                }}
              />
              <Input
                type="text"
                value={destination}
                placeholder="Destination"
                onChange={onChangeHandle}
              />
            </IconWrapper>
            <Label className="label">Search destination</Label>
          </InputWrapper>
          <InputWrapper>
            <IconWrapper>
              <ImUser
                style={{
                  color: "var(--clr-primary)",
                  fontSize: "22px",
                  borderRadius: "50%",
                }}
              />
              <Input type="text" placeholder="person" />
            </IconWrapper>
            <Label className="label">Many people ?</Label>
          </InputWrapper>

          <InputWrapper>
            <IconWrapper>
              <FaCalendarAlt
                style={{
                  color: "var(--clr-primary)",
                  fontSize: "22px",
                  borderRadius: "50%",
                }}
              />
              <Input type="text" placeholder="date" />
            </IconWrapper>
            <Label className="label">When start?</Label>
          </InputWrapper>

          <button type="submit" onClick={OnsubmitHandle}>
            Search places
          </button>
        </Fade>
      </Form>
    </SearchContainer>
  );
}
