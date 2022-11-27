import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Container } from "../../Components/Container.style";
import { RegisterStyle } from "./Register.style";

function Register() {
  const [inputData, setInputData] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value, id: new Date().getTime().toString() });
  };
  const onclickHande = (e) => {
    e.preventDefault();
    if (input.name && input.email && input.password) {
      setInputData([...inputData, { input }]);
      setInput({ name: "", email: "", password: "" });
    } else alert("please fill the form");
    console.log(inputData);
  };

  return (
    <Container>
      <RegisterStyle>
        <div className="left">
          <img src="./images/resgister.jpg" alt="" />
          <h3>
            "We've been using untitled to kick start every new offer and ca't
            imageine working without it ."
          </h3>
        </div>

        <div className="right">
          <h3>create an account</h3>
          <p>let's get started journey with us !</p>
          <form action="/">
            <input
              type="text"
              value={input.name}
              onChange={onChangeHandle}
              placeholder="Name"
              name="name"
              autoComplete="current-name"
              required
            />
            <input
              type="email"
              onChange={onChangeHandle}
              placeholder="Email"
              name="email"
              autoComplete="current-email"
              value={input.email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChangeHandle}
              value={input.password}
              autoComplete="current-password"
              required
            />
            <button type="submit" onClick={onclickHande}>
              Create account
            </button>
          </form>
          <button className="google">
            <FcGoogle /> Sign Up with Google
          </button>
          <div className="haveAnaccount">
            Already have an account ? <Link to={"./login"}>login</Link>
          </div>
        </div>
      </RegisterStyle>
      {inputData.map((event) => {
        const { name, email, password, id } = event.input;
        console.log(name);
        console.log(password);
        console.log(event);
        return (
          <div key={id}>
            <span>name : {name}</span> <br />
            <br />
            <span>password : {password}</span> <br />
            <br />
            <span>email : {email}</span> <br />
            <br />
          </div>
        );
      })}
    </Container>
  );
}

export default Register;
