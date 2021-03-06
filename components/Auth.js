import React, { useState } from "react";
import styled from "styled-components";
import { Form, Card, Col, Row, Input, Button, Spin } from "antd";
//import Loader from "./Loader";

const cardStyles = {
  width: "95%",
  margin: "auto",
  marginTop: "5rem",
  borderRadius: "0.5rem"
};
const inputBoxStyles = {
  height: "2.5rem",
  borderRadius: ".5rem"
};
const buttonStyles = {
  height: "2.5rem",
  borderRadius: ".5rem",
  marginTop: "1rem"
};
const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Controls = styled.div`
  margin-top: 2rem;
`;
const Label = styled.p`
  margin-top: 1rem;
  margin-bottom: -0.1rem;
`;
const fadeStyle = {
  opacity: 0,
  transition: "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s"
};
const SignUpForm = styled.div`
  margin-top: -0.8rem;
`;

const InputControls = props => {
  const [isSignUp, setIsSignUp] = useState(false);
  const conditionalJsx = isSignUp ? (
    <SignUpForm>
      <Label>Confirm Password</Label>
      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Please confirm your password"
          }
        ]}
      >
        <Input.Password
          visibilityToggle={false}
          style={{ ...inputBoxStyles }}
        />
      </Form.Item>
    </SignUpForm>
  ) : (
    ""
  );
  const nameInitials = isSignUp ? (
    <>
      <Label>Firstname</Label>
      <Form.Item
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please confirm your firstname"
          }
        ]}
      >
        <Input style={{ ...inputBoxStyles }} />
      </Form.Item>
      <Label>Lastname</Label>
      <Form.Item
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please confirm your lastname"
          }
        ]}
      >
        <Input style={{ ...inputBoxStyles }} />
      </Form.Item>
    </>
  ) : (
    ""
  );
  const signUpHandler = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <Controls>
      <Row>
        <Col lg={4} md={4} xs={1} sm={1}></Col>
        <Col lg={16} md={16} xs={22} sm={22}>
          <Form
            onFinish={values => {
              props.onSignUp(values, isSignUp);
            }}
          >
            <Label>Username</Label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input a valid email"
                }
              ]}
            >
              <Input style={{ ...inputBoxStyles }} />
            </Form.Item>
            {nameInitials}

            <Label>Password</Label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password"
                }
              ]}
            >
              <Input.Password
                visibilityToggle={false}
                style={{ ...inputBoxStyles }}
              />
            </Form.Item>
            <Form.Item>
              {conditionalJsx}
              <Label
                type="link"
                style={{ textAlign: "right", marginTop: "-2rem" }}
              >
                <Button type="link" onClick={() => signUpHandler()}>
                  {!isSignUp
                    ? `New user? Sign up`
                    : "Already have an account?Sign in"}
                </Button>
              </Label>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ ...buttonStyles }}
                block
              >
                {!isSignUp ? "Sign in" : "Sign up"}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Controls>
  );
};

const Auth = props => {
  return (
    <>
      <Spin spinning={props.loading}>
        <Row style={props.loading ? { ...fadeStyle } : null}>
          <Col lg={6} md={6} xs={0} sm={0}></Col>
          <Col lg={12} md={12} xs={24} sm={24}>
            <Card style={{ ...cardStyles }}>
              <Image src="/Trouver-logo.png" />
              <InputControls
                onSignUp={(values, isSignUp) =>
                  props.onSignUp(values, isSignUp)
                }
              />
            </Card>
          </Col>
          <Col lg={6} md={6} xs={0} sm={0}></Col>
        </Row>
      </Spin>
    </>
  );
};
export default Auth;
