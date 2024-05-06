import React from "react";
interface PropComponent {
  className?: string;
}
const JobDetailDescriptionJobPage: React.FC<PropComponent> = ({
  className,
}) => {
  return (
    <>
      <div className={`${className}`}>
        <div>
          <h2 className="text-primary font-bold text-xl">
            Chi tiết thông tin công việc
          </h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            maxime provident nam consequuntur, at quibusdam vero illo eveniet
            temporibus animi ea accusamus sint. Explicabo consequatur, eligendi
            nihil saepe dolorum quibusdam?
          </p>
        </div>
      </div>
    </>
  );
};

export default JobDetailDescriptionJobPage;
