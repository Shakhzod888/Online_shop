import React from "react";
import { Box } from "@mantine/core";
import Form from "./form/form";
import Header from "./header/header";
import "../components/web.scss";

function Web() {
  return (
    <Box maw="100%" w="100%" h="100vh">
      <Header />
      <Form />
    </Box>
  );
}

export default Web;
