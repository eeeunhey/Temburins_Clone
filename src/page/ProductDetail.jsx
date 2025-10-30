import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/eeeunhey/Temburins_Clone?id=${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log("디테일", data);
    setProduct(data[0]);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto py-10 px-6 gap-10">
      <div className="flex-1 flex justify-center bg-neutral-100 p-10 rounded-xl">
        <img
          src={product?.img}
          alt={product?.title}
          className="max-w-sm w-full object-contain"
        />
      </div>

      <div className="flex-1 px-4 md:px-8">
        <h2 className="text-2xl font-semibold mb-2">{product?.title}</h2>
        <p className="text-lg text-neutral-700 mb-4">{product?.price_text}</p>
        <p className="text-sm text-neutral-500 mb-6">{product?.notes}</p>

        <Form.Select className="border border-neutral-300 rounded-md text-sm focus:ring-0 focus:border-neutral-500">
          <option value="">용량 선택</option>
          {product?.size?.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </Form.Select>

        <Button variant="dark" className="w-100 mt-3">
          추가
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
