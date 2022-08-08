import React from "react";
import { Tabs } from "antd";
import style from "./BodyDashboard.module.css";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import IosShareIcon from "@mui/icons-material/IosShare";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./BodyDashboard.css";
const { TabPane } = Tabs;

const BodyDashboard = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className={style.BodyDashboard}>
      <div className={style.container}>
        <div className={style.container_left}>
          <div className={style.container_header}>
            <div className={style.item_left}>
              <h3>Audience Overview</h3>
              <h4 className={style.item_left_text}>
                Or you can <a href="#">sync data or Dashboard</a> to ensure your data is always up-tp-date
              </h4>
            </div>
            <div className={style.item_right}>
              <MoveToInboxIcon className="icon-item_right" />
              <IosShareIcon className="icon-item_right" />
              <KeyboardArrowDownIcon className="icon-item_right" />
            </div>
          </div>
          <div className={style.container_static}>
            <div className={style.static_left}>
              <div className={style.item}>
                <div className={style.rate}>
                  <div className={style.rate_description}>$ 3,056</div>
                  <div className={style.rate_name}>Rate</div>
                </div>
                <div className={style.value}>
                  <div className={style.rate_description}>$ 1,998</div>
                  <div className={style.rate_name}>Value</div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.static_right}>
            <Tabs defaultActiveKey="1" onChange={onChange} className="tab_content">
              <TabPane tab="Week" key="1">
                <img
                  src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                  className="img-chart"
                />
              </TabPane>
              <TabPane tab="Month" key="2">
                <img
                  src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                  className="img-chart"
                />
              </TabPane>
              <TabPane tab="Year" key="3">
                <img
                  src="https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
                  alt=""
                  className="img-chart"
                />
              </TabPane>
            </Tabs>
          </div>
          <div className={style.container_chart}></div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.container_left}>
          <div className={style.item_left}>
            <h3>Active Users</h3>
            <h4 className={style.item_left_text}>How do your users visited in the time.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDashboard;
