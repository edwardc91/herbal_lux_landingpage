"use client";
import React from "react";
import { Space, Grid, Typography, Image } from "antd";
import { useTranslation, Trans } from "react-i18next";

import "./style.css";

const { Title } = Typography;

const { useBreakpoint } = Grid;

export default function Header({}) {
  const { md } = useBreakpoint();
  const { t } = useTranslation(["common"]);

  return (
      <Space
        direction="vertical"
        size="large"
        className="ant-space-full-width ant-space-children-full-width ant-space-children-transparent transparent"
        align="center"
        style={{ overflow: "auto", height: "100vh" }}
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
          <Title level={md ? 2 : 5} style={{color: "black"}}><Trans t={t} i18nKey="Header.title1">Welcome to Herbal Lux where every soap is a masterpiece of nature's goodness!</Trans></Title>
        </Space>
      </Space>
  );
}
