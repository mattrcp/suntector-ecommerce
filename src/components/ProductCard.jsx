// import { Link } from "react-router-dom";
// import { products } from "../constant";

// const ProductCard = ({ addToCart, limit }) => {
//   return (
//     <>
//       {products.map((product, index) => (
//         <Link
//           key={index}
//           to={`/products/${product.id}`}
//           className={`h-auto w-[346px] bg-white p-[24px] rounded-[18px] flex flex-col gap-[16px] text-left relative overflow-hidden mb-[24px] cursor-pointer`}
//           style={{ transition: "transform 0.3s ease" }}
//         >
//           <div className="flex justify-center align-middle items-end h-[301px]"></div>
//           <div className="flex flex-col gap-[8px]">
//             <div className="flex justify-between align-top">
//               <div className="flex flex-col gap-[8px]">
//                 <h3 className="text-body-base-md font-body">{product.name}</h3>
//                 <p className="font-body text-body-base-xs ">{product.gender}</p>
//               </div>
//               <div className="flex flex-col items-end justify-between">
//                 <p className="font-body text-body-base-lg font-semi">
//                   ${product.price}
//                 </p>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="p-0 cursor-pointer text-body-base-xs hover:font-semi"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </>
//   );
// };

// export default ProductCard;
