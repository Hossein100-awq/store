import React, { useState, useEffect, useRef } from "react";
import img from "./../../assets/img/ChatGPT Image Feb 18, 2026, 11_02_27 PM.png";
import { Button } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./../animation/Info.css";
import { Link } from "react-router-dom";


const Info: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={visible}
      timeout={1800}
      classNames="fade-slide"
      unmountOnExit
    >
      <div ref={nodeRef} className="grid grid-cols-2 my-20 shadow-lg shadow-amber-300 rounded-r-3xl">
        <div className="col-span-1 flex flex-col justify-center items-center">
          <strong className="text-2xl">shopy</strong>
          <p className="mt-4 text-gray-600 leading-9 mx-5 text-lg">
            به فروشگاه خودتان خوش آمدید؛ جایی که استایل با کیفیت ملاقات می‌کند. جدیدترین
            کالکشن‌های لباس با طراحی مدرن، پارچه‌های باکیفیت و قیمت‌های مناسب را
            کشف کنید. ما اینجاییم تا تجربه‌ای متفاوت از خرید آنلاین را برای شما
            رقم بزنیم — ساده، سریع و الهام‌بخش. استایل خودت را بساز و بدرخش ✨
          </p>
          <div className="mt-8">
            <Button component={Link} to='/List' variant="contained" size="medium">
              بیشتر
            </Button>
          </div>
        </div>
        <div className="col-span-1">
          <img className="rounded-r-3xl" src={img} alt="img" />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Info;
