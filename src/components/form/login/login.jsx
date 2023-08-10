import { Box, Flex, Text, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

import Wk from "../assets/wk.png";
import Google from "../assets/google.png";

function Login() {
  const [doneEmail, setDoneEmail] = useState(false);
  const [donePassword, setDonePassword] = useState(false);
  const [doneAll, setDoneAll] = useState(false);
  const form = useForm({
    initialValues: { email: "", password: "" },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? setDoneEmail(true) : "Invalid email",
      password: (value) =>
        value.length < 6
          ? "Password must have at least 6 letters"
          : setDonePassword(true),
    },
  });

  const handleInputs = () => {
    if (doneEmail && donePassword) {
      setDoneAll(true);
    } else {
      setDoneEmail(false);
      setDonePassword(false);
    }
  };

  return (
    <>
      <Box maw="100%" w="100%" h="100vh" className="form">
        <Flex w="100%" h="100%" pt={100} justify="center" align="center">
          <Box className="loginBox" maw="504px" w="504px" h={543} bg="red">
            <Text ta="center" c="#4E4E4E" pt={50}>
              Sign In
            </Text>
            <Flex justify="center" align="center" mt={60}>
              <form onSubmit={form.onSubmit(console.log)}>
                <TextInput
                  className="formInput"
                  w={344}
                  size="lg"
                  placeholder="Email"
                  {...form.getInputProps("email")}
                />
                <PasswordInput
                  className="formInput"
                  w={344}
                  pt={30}
                  size="lg"
                  placeholder="Password"
                  {...form.getInputProps("password")}
                />
                <Flex justify="center" align="center" mt={30}>
                  <button
                    onClick={() => {
                      handleInputs();
                    }}
                    className="submitBtn"
                    type="submit"
                    mt="sm"
                  >
                    <span>Sign In</span>
                    <svg
                      type="submit"
                      xmlns="http://www.w3.org/2000/svg"
                      width="126"
                      height="48"
                      viewBox="0 0 126 48"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_57_236)">
                        <path
                          d="M8.79639 6.14261L16.5928 0H120.072V28.823L111.095 35.2019L102.117 41.5808H1V12.2852L8.79639 6.14261Z"
                          fill="url(#paint0_linear_57_236)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_57_236"
                          x="0"
                          y="0"
                          width="125.072"
                          height="47.5808"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dx="2" dy="3" />
                          <feGaussianBlur stdDeviation="1.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.94902 0 0 0 0 0.596078 0 0 0 0 0.341176 0 0 0 0.7 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_57_236"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_57_236"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_57_236"
                          x1="1"
                          y1="20.7904"
                          x2="120.072"
                          y2="20.7904"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF512F" />
                          <stop offset="1" stop-color="#DD2476" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </button>
                </Flex>
              </form>
            </Flex>

            <Flex justify="space-around" mt={30} align="center">
              <Flex
                w={220}
                gap={10}
                h={60}
                bg="white"
                justify="center"
                align="center"
              >
                <Text c="#BDBDBD" fz={15}>
                  Continue with VKontakte
                </Text>
                <img src={Wk} alt="" />
              </Flex>
              <Flex
                w={220}
                gap={10}
                h={60}
                bg="white"
                justify="center"
                align="center"
              >
                <Text c="#BDBDBD" fz={15}>
                  Continue with VKontakte
                </Text>
                <img src={Google} alt="" />
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Login;
