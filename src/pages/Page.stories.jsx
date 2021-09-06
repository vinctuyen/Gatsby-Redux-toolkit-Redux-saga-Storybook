import * as React from "react";
import Home from "./index";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  title: "Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomeMain = Template.bind({});
HomeMain.args = {};
