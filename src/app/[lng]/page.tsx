import { NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "../i18n";
type Props = {
  params: {
    lng: string;
  };
};

const Page: NextPage<Props> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
    </>
  );
};

export default Page;
