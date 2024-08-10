import { memo } from "react";
import "./Aside.css";
import { Logo } from "@components/Logo/Logo";

const Aside = () => {
  return (
    <div className="Aside">
      <a href="https://google.com" className="Aside-Logo">
        <Logo height="30" />
      </a>
      <div className="Aside-Content">
        <nav className="Aside-Nav">
          <a href="./">Об аккаунте</a>
          <a href="tel:987765467">Сменить план</a>
          <a aria-disabled>Полезная информация</a>
        </nav>
      </div>
      <div className="Aside-CallbackBox">
        <div className="Aside-CallbackBoxTitle">Связаться с менеджером</div>
        <a href="tel:987765467" className="Aside-CallbackBoxLink">
          +7 (983) 923-23-22
        </a>
      </div>
    </div>
  );
};

export default memo(Aside);
