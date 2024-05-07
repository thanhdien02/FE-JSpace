import React from "react";
interface PropComponent {
  className?: string;
}
const CompanyDetailDescriptionPage: React.FC<PropComponent> = ({
  className,
}) => {
  return (
    <>
      <div className={`${className}`}>
        <div>
          <h2 className="text-primary font-bold text-xl">
            Chi tiết thông tin công việc
          </h2>

          <p
            className="mt-3"
            // Prevent XSS Attack recommen from React Docs
            dangerouslySetInnerHTML={{
              __html: `<strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              maxime provident nam consequuntur, at quibusdam vero illo eveniet
              temporibus animi ea accusamus sint. Explicabo consequatur, eligendi
              nihil saepe dolorum quibusdam?</strong> <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              maxime provident nam consequuntur, at quibusdam vero illo eveniet
              temporibus animi ea accusamus sint. Explicabo consequatur, eligendi
              nihil saepe dolorum quibusdam?</strong> <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              maxime provident nam consequuntur, at quibusdam vero illo eveniet
              temporibus animi ea accusamus sint. Explicabo consequatur, eligendi
              nihil saepe dolorum quibusdam?</strong> <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              maxime provident nam consequuntur, at quibusdam vero illo eveniet
              temporibus animi ea accusamus sint. Explicabo consequatur, eligendi
              nihil saepe dolorum quibusdam?</strong> <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              maxime provident nam consequuntur, at quibusdam vero illo eveniet
              temporibus animi ea accusamus sint. Explicabo consequatur, eligendi
              nihil saepe dolorum quibusdam?</strong> <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              maxime provident nam consequuntur, at quibusdam vero illo eveniet
              temporibus animi ea accusamus sint. Explicabo consequatur, eligendi
              nihil saepe dolorum quibusdam?</strong>`,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailDescriptionPage;
