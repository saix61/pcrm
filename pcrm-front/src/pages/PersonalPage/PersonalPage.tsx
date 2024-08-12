import { memo, useMemo } from "react";
import "./PersonalPage.css";
import useUserState from "@store/useUserState";
import formatISODate from "@utilities/formatISODate";
import SidebarLayout from "@components/SidebarLayout/SidebarLayout";

const PersonalPage = () => {
  const { user } = useUserState();

  const PersonalInfo = useMemo(
    () =>
      user && (
        <>
          <tr>
            <td>
              <span>Имя:</span>
            </td>
            <td>{`${user.name} ${user.surname}`}</td>
          </tr>
          <tr>
            <td>
              <span>Email:</span>
            </td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>
              <span>Телефон:</span>
            </td>
            <td>{user.phone}</td>
          </tr>
        </>
      ),
    [user]
  );

  const Plan = useMemo(
    () =>
      user &&
      user.plan &&
      typeof user.plan !== "string" && (
        <>
          <tr>
            <td>
              <span>План:</span>
            </td>
            <td>
              {user.plan.name === "Деактивирован" ? (
                <span>{user.plan.name}</span>
              ) : (
                <>{user.plan.name}</>
              )}
            </td>
          </tr>
          {user.plan.name !== "Деактивирован" && user.plan_date_start && (
            <tr>
              <td>
                <span>Дата активации:</span>
              </td>
              <td>{formatISODate(user.plan_date_start)}</td>
            </tr>
          )}
          {user.plan.name !== "Деактивирован" && user.plan_date_end && (
            <tr>
              <td>
                <span>Действует до:</span>
              </td>
              <td>{formatISODate(user.plan_date_end)}</td>
            </tr>
          )}
        </>
      ),
    [user]
  );

  const PlanDescription = useMemo(() => {
    return (
      user &&
      user.plan &&
      typeof user.plan !== "string" &&
      user.plan.description && (
        <tbody>
          <tr>
            <td colSpan={2}>
              <br />
              <h3>Описание плана:</h3>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>{user.plan.description}</td>
          </tr>
        </tbody>
      )
    );
  }, [user]);

  const TFoot = useMemo(() => {
    return (
      user &&
      user.additional && (
        <tfoot>
          <tr>
            <td colSpan={2}>
              <br />
              <h3>Доп. Информация:</h3>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>{user.additional}</td>
          </tr>
        </tfoot>
      )
    );
  }, [user]);

  return (
    <SidebarLayout>
      {user ? (
        <div className="PersonalPage">
          <h1>Информация об аккаунте</h1>
          <table>
            <thead>
              {PersonalInfo}
              {Plan}
            </thead>
            {PlanDescription}
            {TFoot}
          </table>
        </div>
      ) : null}
    </SidebarLayout>
  );
};

export default memo(PersonalPage);
