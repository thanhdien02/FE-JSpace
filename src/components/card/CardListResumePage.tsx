import React, { useState } from "react";
import IconShare from "../icons/IconShare";
import IconDownload from "../icons/IconDownload";
import IconTrash from "../icons/IconTrash";
import { useDispatch, useSelector } from "react-redux";
import { fileDeleteFile } from "../../store/file/file-slice";
import { Modal } from "antd";

interface PropComponent {
  className?: string;
  item: any;
}
const CardListResumePage: React.FC<PropComponent> = ({ className, item }) => {
  const { user } = useSelector((state: any) => state.auth);
  const dispath = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    dispath(fileDeleteFile({ candidate_id: user?.id, resume_id: item?.id }));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`relative h-[350px] overflow-hidden ${className}`}>
      <img src={item?.imageFilePath} alt="" className="object-cover " />
      <div className="text-white absolute flex bg-gradient-to-t from-black/50 to-white/10  inset-0 w-full">
        <div className="self-end p-4 w-full">
          <a
            href={item?.path}
            className="text-lg break-words text-wrap line-clamp-1 top-1 left-1 font-bold"
            target="_blank"
          >
            {item?.name}
          </a>
          <p className="text-base">Cập nhật lần cuối 17-04-2024 00:39 AM</p>
          <div className="flex gap-2 mt-5">
            <div className="flex gap-1 justify-center hover:opacity-90 transition-all text-xs items-center bg-primary text-white px-3 py-[6px] rounded-2xl cursor-pointer">
              <IconShare></IconShare>
              <span className="font-medium">Chia sẻ</span>
            </div>
            <div className="flex gap-1 justify-center hover:opacity-90 transition-all text-xs items-center bg-primary text-white px-3 py-[6px] rounded-2xl cursor-pointer">
              <IconDownload></IconDownload>
              <span className="font-medium">Tải xuống</span>
            </div>
            <div className="ml-auto self-center" onClick={showModal}>
              <IconTrash
                classIcon="!w-5 !h-5"
                className="cursor-pointer p-2 flex rounded-full hover:bg-primary transition-all hover:text-white"
              ></IconTrash>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Thông báo xóa hồ sơ"
        okText="Xác nhận"
        cancelText="Hủy"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có chắc chắn xóa hồ sơ xin việc ra khỏi trang tuyển dụng.</p>
      </Modal>
    </div>
  );
};

export default CardListResumePage;
