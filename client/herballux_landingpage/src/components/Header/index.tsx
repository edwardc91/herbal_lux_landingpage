"use client";
import React from "react";
import { Space, Grid, Typography, Image } from "antd";
import { useTranslation } from "react-i18next";

import "./style.css";

const { Title } = Typography;

const { useBreakpoint } = Grid;

export default function Header({}) {
  const { md } = useBreakpoint();
  const { t } = useTranslation("common");

  return (
    <>
      <Space
        direction="vertical"
        size="large"
        className="ant-space-full-width ant-space-children-full-width"
        align="center"
        style={{ height: "100vh", overflow: "auto", position: "absolute", zIndex: 3000 }}
      >
        <Space
          className="ant-space-full-width"
          style={{ justifyContent: "center" }}
        >
          <img src="./images/herbal_lux_logo_white_border.png" width="600" />
        </Space>
        <Space
          className="ant-space-full-width"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <Title level={md ? 2 : 5} style={{color: "black"}}>Welcome to Herbal Lux where every soap is a masterpiece of nature's goodness!</Title>
        </Space>
      </Space>
      <div className="bubbles-wrapper">
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
      </div>
    </>
  );
}
