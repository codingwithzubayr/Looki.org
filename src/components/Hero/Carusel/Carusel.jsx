import React, { useState, useEffect, useContext } from "react";
import CurselStyle from "../Carusel/Carusel.module.css";
import { LanguageContext } from "../../LanguageContext/Language";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const debounce = (func, delay) => {
    setIsDebouncing(true);
    setTimeout(() => {
      setIsDebouncing(false);
      func();
    }, delay);
  };

  const handlePrev = () => {
    if (!isDebouncing) {
      debounce(() => {
        setAnimating(true);
        setCurrentIndex(
          currentIndex === 0 ? images.length - 1 : currentIndex - 1
        );
      }, 800);
    }
  };

  const handleNext = () => {
    if (!isDebouncing) {
      debounce(() => {
        setAnimating(true);
        setCurrentIndex(
          currentIndex === images.length - 1 ? 0 : currentIndex + 1
        );
      }, 800);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimating(false);
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  return (
    <div
      className={`${CurselStyle["carousel-image"]} ${
        animating ? `${CurselStyle["animating"]}` : ""
      }`}
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className={CurselStyle["carousel-container"]}>
        <div>
          <div className={CurselStyle["content"]}>
            <h2 className={CurselStyle["subtitle"]}>
              {language === "en" && "FACE MAKEUP BRUSH"}
              {language === "uz" && "YUZNI BARYAJ CHETKASI"}
            </h2>
            <h1 className={CurselStyle["title"]}>
              {language === "en" && "Skincare Brush Set Sale 30% Off"}
              {language === "uz" &&
                "Terini parvarish qilish uchun cho'tkalar to'plami sotuvi 30% chegirma"}
            </h1>
            <button className={CurselStyle["content-btn"]}>
              {language === "en" && "SHOP NOW"}
              {language === "uz" && "HOZIR SOTISH"}
            </button>
          </div>
          <button className={CurselStyle["left"]} onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button className={CurselStyle["rigth"]} onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
