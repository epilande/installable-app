import * as React from "react";
import { add, multiply } from "math";
import { slugify } from "utils";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <h1 style={{ display: "flex", justifyContent: "space-between" }}>
        <code>Hello, {slugify("Installable App Demo")}</code>
        <code>v{process.env.APP_VERSION}</code>
      </h1>
      <h3>Math utils:</h3>
      <p>
        <strong>
          <code>add</code>
        </strong>{" "}
        <br />1 + 2 = {add(1, 2)}
      </p>
      <p>
        <strong>
          <code>multiply</code>
        </strong>
        <br />1 * 2 = {multiply(1, 2)}
      </p>
    </Layout>
  );
};

export default HomePage;
