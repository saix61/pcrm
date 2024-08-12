import { memo, ReactNode, useMemo, useState } from "react";
import "./SidebarLayout.css";
import Aside from "@components/Aside/Aside";
import LogoutButton from "@components/LogoutButton/LogoutButton";

type TSidebarLayout = {
  aside?: ReactNode;
  children: ReactNode | null;
};

const SidebarLayout: React.FC<TSidebarLayout> = ({
  children,
  aside = <Aside />,
}) => {
  const [burgerState, setBurgerState] = useState<boolean>(false);

  const burgerHandler = () => {
    setBurgerState((state) => !state);
  };

  const SidebarLayoutClass = useMemo(
    () => `SidebarLayout${burgerState ? " _active" : ""}`,
    [burgerState]
  );

  return (
    <div className={SidebarLayoutClass}>
      <div className="SidebarLayout-Burger" onClick={burgerHandler}></div>
      <aside className="SidebarLayout-Aside">
        <div className="SidebarLayout-AsideContent">{aside}</div>
        <LogoutButton />
      </aside>
      <section className="SidebarLayout-Section">
        {children || (
          <div className="EmptyPage">
            <h1>Эта страница пуста</h1>
          </div>
        )}
      </section>
    </div>
  );
};

export default memo(SidebarLayout);
