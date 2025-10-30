import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div
      onClick={showDetail}
      className="
        group relative flex flex-col items-center
        bg-white  overflow-hidden cursor-pointer
        transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      "
    >
      <div className="w-full flex items-center justify-center bg-neutral-50">
        <img src={item.img} alt={item.title} />
      </div>

      <div className="w-full text-center px-4 py-5">
        <p className="font-semibold text-neutral-600">{item.title}</p>

        {item.notes && (
          <p className="mt-1 text-[13px] text-neutral-500 leading-relaxed">
            {item.notes}
          </p>
        )}

        <div className="mt-2  font-semibold text-neutral-800">
          {item.price_text ?? `₩ ${item.price?.toLocaleString()}`}
        </div>

        {item.new && (
          <div className="mt-2 inline-block rounded-full bg-black text-white text-[10px] px-3 py-1">
            NEW
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
