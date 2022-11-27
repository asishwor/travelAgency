import React from "react";
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

export default function Search() {
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
              <Input type="text" placeholder="Destination" />
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

          <button>Search places</button>
        </Fade>
      </Form>
    </SearchContainer>
  );
}
