import React from "react";
import { Steps } from "antd";
const { Step } = Steps;

const ShopSteps = () => (
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
);

export default ShopSteps;
