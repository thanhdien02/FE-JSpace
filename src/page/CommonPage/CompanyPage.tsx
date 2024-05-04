import React, { useEffect, useState } from "react";

const CompanyPage: React.FC = () => {
  const [linkimg, setLinkimg] = useState("");
  useEffect(() => {}, []);
  const handleChange = (e: any) => {
    console.log(e.target.files[0]);
    setLinkimg(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    return () => {
      linkimg && URL.revokeObjectURL(linkimg);
    };
  }, [linkimg]);
  const handleMove = () => {
    setLinkimg("");
  };
  return (
    <>
      <input type="file" onChange={handleChange} />
      <img src={linkimg} alt="" className="w-[100px] h-[100px] object-cover" />
      <button className="p-2 bg-primary rounded-lg" onClick={handleMove}>
        Move
      </button>
    </>
  );
};

export default CompanyPage;
