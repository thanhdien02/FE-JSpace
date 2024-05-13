import IconMapPin from "../../components/icons/IconMapPin";
import React, { useEffect, useState } from "react";
import IconMap from "../../components/icons/IconMap";
import GoogleMapReact from "google-map-react";
import { TbMapPinFilled } from "react-icons/tb";
interface PropComponent {
  className?: string;
}
interface PropComponentChild {
  children?: any;
  lat?: any;
  lng?: any;
}
const AnyReactComponent: React.FC<PropComponentChild> = ({ children }) => (
  <>
    <div>{children}</div>
  </>
);
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
  const [coords, setCoords] = useState<any>(null);

  const [name] = useState<any>("Đồng Tháp Cao Lãnh, Đồng Tháp");
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    name
  )}`;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
    if (name) {
      // setCoords({ lat: name?.lat, lng: name?.lng });
    }
  }, [name]);

  return (
    <>
      <div className={`px-6 py-4  ${className}`}>
        <h2 className="text-lg font-semibold text-primary">
          Thông tin công ty
        </h2>
        <div className="mt-2">
          <div className="flex gap-3 items-center">
            <IconMapPin
              className="text-primary"
              classIcon="!w-6 !h-6"
            ></IconMapPin>
            <span className="">Địa chỉ công ty</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            impedit sit? Commodi corrupti ex excepturi aut explicabo optio
            aperiam cupiditate rem repellendus! Voluptate tempora asperiores
            obcaecati a repellat excepturi voluptatem.
          </p>
          <span className="w-full h-[1px] bg-gray-300 block my-4"></span>
          <div className="flex gap-3 items-center mt-3">
            <IconMap className="text-primary" classIcon="!w-6 !h-6"></IconMap>
            <span className="">Bản đồ</span>
          </div>

          <div></div>
          <div className="relative text-gray-500 w-full h-[250px] text-sm mt-2">
            <MapTitleAddress
              address={name}
              googleMapsLink={googleMapsLink}
            ></MapTitleAddress>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: import.meta.env.VITE_REACT_KEY_MAP,
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
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyDetailMoreInformationPage;
