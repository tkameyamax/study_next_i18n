"use client";

import { FooterBase } from "./FooterBase";
import { useTranslation } from "../../../i18n/client";
import { NextPage } from "next";

type Props = {
  lng: string;
};

export const Footer: NextPage<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
