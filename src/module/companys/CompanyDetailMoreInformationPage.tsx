import IconMapPin from "../../components/icons/IconMapPin";
import React, { useEffect, useRef, useState } from "react";
import IconMap from "../../components/icons/IconMap";
// import GoogleMapReact from "google-map-react";
// import { TbMapPinFilled } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import IconLink from "../../components/icons/IconLink";
import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";
interface PropComponent {
  className?: string;
}
// interface PropComponentChild {
//   children?: any;
//   lat?: any;
//   lng?: any;
// }
// const AnyReactComponent: React.FC<PropComponentChild> = ({ children }) => (
//   <>
//     <div>{children}</div>
//   </>
// );
interface IMapTitleAddress {
  googleMapsLink?: string;
  address?: string;
}
const MapTitleAddress: React.FC<IMapTitleAddress> = ({
  googleMapsLink,
  address,
}) => (
  <>
    <div className="absolute z-10 top-2 left-2 bg-white shadow-md p-2 w-[180px]">
      <h2 className="font-medium text-sm line-clamp-2 text-black">{address}</h2>
      <a
        className="text-primary text-xs hover:underline transition-all inline-block mt-1 text-nowrap font-medium "
        href={googleMapsLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google Maps
      </a>
    </div>
  </>
);
const CompanyDetailMoreInformationPage: React.FC<PropComponent> = ({
  className,
}) => {
  const { companyById } = useSelector((state: any) => state.company);
  const { t } = useTranslation();
  // const [coords, setCoords] = useState<any>(null);

  const [name, setName] = useState<any>("Đồng Tháp Cao Lãnh, Đồng Tháp");
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    name
  )}`;
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoords({ lat: latitude, lng: longitude });
  //     }
  //   );
  // }, [name]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyLink = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      message.success("Đã sao chép");
    }
  };
  useEffect(() => {
    if (companyById?.company?.address) setName(companyById?.company?.address);
  }, [companyById]);
  return (
    <>
      <div className={`px-6 py-4 ${className}`}>
        <h2 className="text-lg font-semibold text-primary">
          {t("companydetail.informationcompany")}
        </h2>
        <div className="mt-2">
          <div className="flex gap-3 items-center">
            <IconMapPin
              className="text-primary"
              classIcon="!w-6 !h-6"
            ></IconMapPin>
            <span className=""> {t("companydetail.companyaddress")}</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            {companyById?.company?.address}
          </p>
          <div className="flex gap-3 items-center mt-5">
            <IconLink className="text-primary" classIcon="!w-6 !h-6"></IconLink>
            <span className="">{t("companydetail.companylink")}</span>
          </div>

          <div className="mt-3 flex gap-1">
            <input
              readOnly
              type="text"
              value={companyById?.company?.companyLink}
              ref={inputRef}
              className="px-3 py-2 border border-solid border-stone-200 w-full"
              placeholder="Website công ty"
            />
            <CopyOutlined
              onClick={handleCopyLink}
              className="px-3 text-lg border border-solid border-stone-200 bg-gray-200"
            />
          </div>
          <span className="w-full h-[1px] bg-gray-300 block my-4"></span>
          <div className="flex gap-3 items-center mt-3">
            <IconMap className="text-primary" classIcon="!w-6 !h-6"></IconMap>
            <span className="">{t("companydetail.map")}</span>
          </div>

          <div></div>
          <div className="relative text-gray-500 w-full h-[250px] text-sm mt-2">
            <MapTitleAddress
              address={name}
              googleMapsLink={googleMapsLink}
            ></MapTitleAddress>

            <div className="">
              <iframe
                title="Vị trí của chúng tôi"
                className="w-full h-[250px]"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20S%C6%B0%20Ph%E1%BA%A1m%20K%E1%BB%B9%20Thu%E1%BA%ADt%20TPHCM,%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n,%20Linh%20Chi%E1%BB%83u,%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c,%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh+(%C4%90%E1%BA%A1i%20H%E1%BB%8Dc%20S%C6%B0%20Ph%E1%BA%A1m%20K%E1%BB%B9%20Thu%E1%BA%ADt)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Population calculator map
                </a>
              </iframe>
            </div>
            {/* <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDcwGyRxRbcNGWOFQVT87A1mkxEOfm8t0w",
              }}
              defaultCenter={coords}
              center={coords}
              defaultZoom={15}
            >
              <AnyReactComponent
                lat={coords?.lat}
                lng={coords?.lng}
                children={<TbMapPinFilled className="text-3xl text-red-600" />}
              />
            </GoogleMapReact> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyDetailMoreInformationPage;
