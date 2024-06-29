import React from "react";

import logo from "../../assets/logo3.png";
import IconClose from "../../components/icons/IconClose";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Skeleton } from "antd";
import CardNotificationAtHeaderPage from "../../components/card/CardNotificationAtHeaderPage";
interface PropComponent {
  className?: string;
  onClick?: any;
}
const NotificationPage: React.FC<PropComponent> = ({ className, onClick }) => {
  const { notifications, loadingNotification } = useSelector(
    (state: any) => state.notification
  );
  const { t } = useTranslation();
  return (
    <>
      <div className={`fixed inset-0 z-20 bg-white ${className}`}>
        <div className="flex gap-5 items-center mt-3 ml-3">
          <img src={logo} className="w-[45px] h-[45px] object-cover" alt="" />
          <h3 className="font-semibold text-lg">{t("notification")}</h3>
          <span
            className="ml-auto mr-5"
            onClick={onClick ? () => onClick(false) : () => {}}
          >
            <IconClose></IconClose>
          </span>
        </div>
        <div className="w-full h-[1px] bg-gray-200 my-3"></div>
        {loadingNotification ? (
          <div className="py-2 px-4">
            <Skeleton />
          </div>
        ) : notifications?.length <= 0 ? (
          <p className="text-gray-500 pl-5 pt-2 font-medium">
            {t("notnotification")}
          </p>
        ) : (
          <div className="py-2 flex flex-col gap-2 max-h-[350px] overflow-auto">
            {notifications?.length > 0 &&
              notifications?.map((item: any) => (
                <CardNotificationAtHeaderPage
                  key={item?.notification?.id}
                  item={item}
                  classname="border-b border-solid border-gray-200"
                ></CardNotificationAtHeaderPage>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationPage;
