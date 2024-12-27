import { useContext } from "react";
import { MdTranslate } from "react-icons/md";
import { I18nContext } from "../I18nProvider";

export const LanguageSelector = () => {
  const context = useContext(I18nContext);

  if (context === null) {
    throw new Error(
      "The I18n context is not initialized. Make sure you have the provider set up correctly."
    );
  }

  return (
    <label htmlFor="select" className="language-switcher">
      <MdTranslate />
      <select
        name="select"
        id="select"
        className="language-switcher-input"
        value={context.language}
        onChange={(e) => context.changeLanguage(e.target.value)}
      >
        <option value="en">{context.t.translate("languages.en")}</option>
        <option value="es">{context.t.translate("languages.es")}</option>
      </select>
    </label>
  );
};