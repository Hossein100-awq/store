import React from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import ProductCard from "./OutSideCart";
import { Link } from "react-router-dom";

interface ListProductProps {
  searchQuery: string;
}

const fetchProducts = async () => {
  const category = "men's clothing";
  const { data } = await axios.get(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
  return data;
};

export default function ListProduct({ searchQuery }: ListProductProps) {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p className="my-20 text-center">درحال بارگزاری...</p>;
  if (error) return <p className="my-20 text-red-600 text-center">خطا در دریافت اطلاعات</p>;

  const filteredProducts = products.filter((item: any) => {
    const query = (searchQuery || "").toLowerCase();
    return (
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-20">
      {filteredProducts.length === 0 && searchQuery !== "" && (
         <p className="text-center text-gray-500 text-lg">محصولی با این مشخصات یافت نشد.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {filteredProducts.map((item: any) => (
          <Link className="block h-full" to={`/Product/${item.id}`} key={item.id}>
            <ProductCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}