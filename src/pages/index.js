import * as React from "react";
import { Badge, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { countSelector } from "store/features/count";
import { sagaActions } from "../store/sagas/typeSagas";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: "100%",
};
const headingAccentStyles = {
  color: "#663399",
};

const IndexPage = () => {
  const { count } = useSelector(countSelector);
  const dispatch = useDispatch();
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <Badge bg="success">{count}</Badge>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <Button onClick={() => dispatch({ type: sagaActions.INCREASE, count })}>
        INCREASE
      </Button>
    </main>
  );
};

export default IndexPage;
