import { NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "../i18n";
import { languages } from "../i18n/settings";
import { Footer } from "./components/Footer";
type Props = {
  params: {
    lng: string;
  };
};

const Page: NextPage<Props> = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  const otherLanguages = languages.filter((language) => language !== lng);

  return (
    <>
      <h1>{t("title")}</h1>
      <div>
        <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      </div>
      <div>
        <Link href={`/${lng}/dinamic/abc`}>
          {t("to-dinamic", { id: "abc" })}
        </Link>
      </div>
      <div>
        <Link href={`/${lng}/dinamic/cde`}>
          {t("to-dinamic", { id: "cde" })}
        </Link>
      </div>
      <Footer lng={lng} />
    </>
  );
};

export default Page;
