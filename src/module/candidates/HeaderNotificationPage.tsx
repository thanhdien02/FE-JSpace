import { Divider, Skeleton } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CardNotificationAtHeaderPage from "../../components/card/CardNotificationAtHeaderPage";
import { useTranslation } from "react-i18next";

const HeaderNotificationPage: React.FC = () => {
  const { notifications, loadingNotification } = useSelector(
    (state: any) => state.notification
  );
  const { t } = useTranslation();

  return (
    <div className="absolute top-[155%] bg-white shadow-md min-w-[300px] min-h-[200px] z-50 right-0">
      <div className="py-3 px-4">
        <h3 className="font-semibold text-lg">{t("notification")}</h3>
      </div>
      <Divider className="mb-1 mt-0"></Divider>
      {loadingNotification ? (
        <div className="py-2 px-4">
          <Skeleton />
        </div>
      ) : notifications?.length <= 0 ? (
        <div className="py-2 px-4">Không có thông báo.</div>
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
  );
};

export default HeaderNotificationPage;
