import { NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "../../../i18n";
type Props = {
  params: {
    id: string;
    lng: string;
  };
};

const Page: NextPage<Props> = async ({ params: { id, lng } }) => {
  const { t } = await useTranslation(lng, "dinamic");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description", { id })}</p>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
    </>
  );
};

export default Page;
