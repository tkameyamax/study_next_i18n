import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "../../../i18n/settings";
import { useTranslation } from "../../../i18n";
import { NextPage } from "next";
import { FooterBase } from "./FooterBase";

type Props = {
  lng: string;
};

export const Footer: NextPage<Props> = async ({ lng }) => {
  const { t } = await useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
