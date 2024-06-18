import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productGetProduct } from "../../store/product/product-slice";
import CardProductAtCommonPage from "../../components/card/CardProductAtCommonPage";
import { Skeleton } from "antd";
import IconChervonRight from "../../components/icons/IconChervonRight";

const HomeListProduct: React.FC = () => {
  const { products, loadingProduct } = useSelector(
    (state: any) => state.product
  );
  const [size] = useState(6);
  const [page] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      productGetProduct({
        page: page,
        size: size,
      })
    );
  }, []);
  return (
    <>
      <div>
        <div className="lg:px-0 px-3 w-primary max-w-full mx-auto py-3">
          <div className="flex justify-between items-baseline">
            <h3 className="font-bold text-2xl lg:my-3 my-2">
              Các dịch vụ dành cho nhà tuyển dụng
            </h3>
            <a
              href="https://jspace-employer.vercel.app/products"
              target="_blank"
              className="flex gap-1 cursor-pointer text-primary hover:underline items-center"
            >
              <span className="font-medium">Xem tất cả</span>
              <IconChervonRight classIcon="!w-5 !h-5"></IconChervonRight>
            </a>
          </div>
          {loadingProduct ? (
            <Skeleton />
          ) : (
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-5">
              {products?.length > 0 &&
                products.map((item: any) => (
                  <CardProductAtCommonPage
                    key={item?.id}
                    item={item}
                  ></CardProductAtCommonPage>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeListProduct;
