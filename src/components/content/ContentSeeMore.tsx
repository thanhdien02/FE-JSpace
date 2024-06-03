import React, { useEffect, useState } from "react";
import IconChervonDown from "../icons/IconChervonDown";
import IconChervonUp from "../icons/IconChervonUp";
import { useTranslation } from "react-i18next";

interface PropComponent {
  className?: string;
  content: string;
  line?: string;
}
// eslint-disable-next-line react-refresh/only-export-components
const ContentSeeMore: React.FC<PropComponent> = ({ className, content }) => {
  const { t } = useTranslation();
  const [seeMore, setSeeMore] = useState(false);
  useEffect(() => {
    let content: any = document.getElementById("message_container");
    let seemore: any = document.getElementById("see-more");
    if (content) {
      var divHeight = content.offsetHeight;
      let lineHeight = parseInt(window.getComputedStyle(content).lineHeight);
      var lines = divHeight / lineHeight;
      if (seeMore) {
        content.classList.remove(`line-clamp-[10]`);
        content.classList.remove("format-html");
      } else {
        if (lines > parseInt("10")) {
          content.classList.add(`line-clamp-[10]`);
          content.classList.add("format-html");
        } else {
          seemore.style.display = "none";
        }
      }
    }
    return () => {
      content.classList.remove(`line-clamp-[10]`);
      content.classList.remove("format-html");
    };
  }, [seeMore]);
  return (
    <div className={`${className}`}>
      <p
        id="message_container"

        className="entry-content content-html relative transition-all mt-3 overflow-hidden leading-6"
        // Prevent XSS Attack recommen from React Docs
        dangerouslySetInnerHTML={{
          __html: `${content}`,
        }}
      ></p>
      <div
        id="see-more"
        className="see-more cursor-pointer flex mt-2 hover:text-primary transition-all"
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? (
          <div className="font-medium mx-auto flex items-center gap-1 text-sm">
            <span>{t("seeless")}</span>
            <IconChervonUp className="self-end"></IconChervonUp>
          </div>
        ) : (
          <div className="font-medium mx-auto flex items-center gap-1 text-sm">
            <span>{t("seemore")}</span>
            <IconChervonDown></IconChervonDown>
          </div>
        )}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(ContentSeeMore);
