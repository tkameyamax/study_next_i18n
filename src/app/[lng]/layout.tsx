import { dir } from "i18next";
import type { NextPage } from "next";
import React from "react";
import { languages } from "../i18n/settings";

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

type Props = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

export default function RootLayout({ children, params: { lng } }: Props) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
