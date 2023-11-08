import { NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "../../../i18n";
import { Footer } from "../../components/Footer";
type Props = {
  params: {
    id: string;
    lng: string;
  };
};

export default async function Page({ params: { id, lng } }: Props) {
  const { t } = await useTranslation(lng, "dinamic");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description", { id })}</p>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
      <Footer lng={lng} />
    </>
  );
}
