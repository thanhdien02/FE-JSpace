import { Divider, Skeleton } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CardNotificationAtHeaderPage from "../../components/card/CardNotificationAtHeaderPage";
import { useTranslation } from "react-i18next";
interface PropComponent {
  className?: string;
  onSeeMore?: any;
}
const HeaderNotificationPage: React.FC<PropComponent> = ({
  className,
  onSeeMore,
}) => {
  const { notifications, loadingNotification } = useSelector(
    (state: any) => state.notification
  );
  const { t } = useTranslation();
  return (
    <div
      className={`absolute top-[155%] bg-white shadow-md min-w-[300px] min-h-[200px] z-50 right-0 rounded-b ${className}`}
    >
      <div className="py-3 px-4">
        <h3 className="font-semibold text-lg">{t("notification")}</h3>
      </div>
      <Divider className="mb-1 mt-0"></Divider>
      {loadingNotification ? (
        <div className="py-2 px-4">
          <Skeleton />
        </div>
      ) : notifications?.length <= 0 ? (
        <div className="py-2 px-4"> {t("notnotification")}</div>
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
      <div
        onClick={() => {
          onSeeMore();
        }}
        className="hidden h-[20px] bg-white hover:bg-gray-200 transition-all w-full justify-center items-center cursor-pointer rounded-b"
      >
        <span className="text-sm">{t("seemore")}</span>
      </div>
    </div>
  );
};

export default HeaderNotificationPage;
