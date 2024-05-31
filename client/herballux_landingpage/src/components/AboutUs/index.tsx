"use client";
import React from "react";
import { Space, Grid, Typography, Image } from "antd";
import { useTranslation, Trans } from "react-i18next";

import "./style.css";

const { Title } = Typography;

const { useBreakpoint } = Grid;

export default function AboutUs({}) {
  const { md } = useBreakpoint();
  const { t } = useTranslation(["common"]);

  return (
    <Space
      direction="vertical"
      size="large"
      className="ant-space-full-width ant-space-children-full-width ant-space-children-transparent transparent"
      align="center"
      style={{ marginTop: "30px" }}
    >
      <Space
        className="ant-space-full-width"
        style={{ justifyContent: "center" }}
      >
        <Typography.Title level={2}>
          {t("AboutUs.title", "About Us")}
        </Typography.Title>
      </Space>
      <Space
        className="ant-space-full-width"
        style={{ justifyContent: "center" }}
        size="large"
      >
        <img src="./images/hblux_photo_several.jpeg" width="1200" />
        <Space direction="vertical" style={{ textAlign: "justify" }}>
          <Typography.Paragraph style={{ fontSize: "25px"}}>
            <Trans t={t} i18nKey="AboutUs.description1">
              At Herbal Lux, we believe in the power of simplicity and nature's
              bounty. Each bar is meticulously handmade to perfection, using
              only the finest ingredients for your skin's delight.
            </Trans>
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "25px"}}>
            <Trans t={t} i18nKey="AboutUs.description2">
              <b>Our Mission:</b> To elevate your bathing experience with luxurious,
              handcrafted soaps that nourish your skin and soothe your soul.
              We're here to redefine self-care one lather at a time.
            </Trans>
          </Typography.Paragraph>
          <Typography.Paragraph style={{ fontSize: "25px"}}>
            <Trans t={t} i18nKey="AboutUs.description3">
            <b>Shop Our Collection:</b> Indulge in our exquisite range of
              botanical-infused soaps, perfect for every skin type and mood.
              From calming lavender to energizing citrus, there's a scent for
              everyone.
            </Trans>
          </Typography.Paragraph>
        </Space>
      </Space>
    </Space>
  );
}
