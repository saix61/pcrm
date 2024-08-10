import { memo, ReactNode } from "react";
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
}) => (
  <div className="SidebarLayout">
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

export default memo(SidebarLayout);
