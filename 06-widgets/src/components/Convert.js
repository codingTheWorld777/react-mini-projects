import React, { useState, useEffect } from "react";
import translate from "../apis/translate";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  // Reduce the number of request to ggTranslate API
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await translate.post(
        "",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };

    if (text) doTranslation();
  }, [language, debouncedText]);

  return (
    <div style={{ margin: "40px 0px" }}>
      <h3 className="ui header">Output</h3>
      <div style={{ fontSize: "40px" }}>{translated}</div>
    </div>
  );
};

export default Convert;
