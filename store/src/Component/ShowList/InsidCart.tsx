import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

interface InsidCartProps {
  addToCart: (product: any) => void;
}

const fetchProductDetail = async ({ queryKey }: any) => {
  const id = queryKey[1];
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};

const InsidCart = ({ addToCart }: InsidCartProps) => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: fetchProductDetail,
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl animate-pulse">در حال بارگذاری...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">خطا در دریافت محصول</p>
      </div>
    );

  if (!product) return null;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <Link 
        to="/List" 
        className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-semibold"
      >
        &larr; بازگشت به لیست محصولات
      </Link>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          
          <div className="flex justify-center items-center bg-gray-50 rounded-xl p-4 h-96">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-contain mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {product.title}
            </h1>
            
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-green-600 ml-4">
                ${product.price}
              </span>
              <div className="text-yellow-400 text-sm">
                ★★★★☆ <span className="text-gray-400">({product.rating?.rate})</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-justify">
              {product.description}
            </p>

            <div className="flex gap-4">
              <button 
                onClick={() => addToCart(product)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md transform hover:-translate-y-1"
              >
                افزودن به سبد خرید
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InsidCart;