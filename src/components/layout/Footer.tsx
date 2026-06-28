import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
      <p>&copy; 2025 WizzyList. {t("footer.tagline")}</p>
    </footer>
  );
};
