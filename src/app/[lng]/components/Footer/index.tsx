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
