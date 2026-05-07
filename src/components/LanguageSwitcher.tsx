import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      className="gap-2 text-primary hover:text-accent"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span className="font-semibold text-sm">{lang === "ar" ? "EN" : "ع"}</span>
    </Button>
  );
};
