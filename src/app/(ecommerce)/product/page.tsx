"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import globalApi from "@/utils/globalApi";
import { IoCartOutline } from "react-icons/io5";
import { BsChat } from "react-icons/bs";
import FilterDrawer from "@/components//ProductSection/FilterDrawer";
import mockData from "@/constants/mockProducts.json";


interface ProductListData {
  product_id: number;
  company_id: number;
  function_id: number;
  name: string;
  thumbnail: string;
  tradename: string;
  description: string;
  spec_sheets_url: string;
  created_at: string;
  company: {
    company_id: number;
    name: string;
    address: string;
    company_type: string;
    created_at: string;
  };
  function: {
    function_id: number;
    name: string;
  };
  product_variants: {
    variant_id: number;
    product_id: number;
    weight: string;
    price: number;
  }[];
}


export default function ProductPage() {
  const router = useRouter();
  const [products, setProducts] = useState<ProductListData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await globalApi.getProducts();
        setProducts(res);
        // NOTE: mock data
        // setProducts(mockData);
      } catch (err: any) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleFiltersApplied = (filteredProducts: ProductListData[]) => {
    setProducts(filteredProducts);
  };

  if (loading)
    return (
      <div className="flex w-full h-full justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (error)
    return (
      <div className="flex w-full h-full justify-center items-center">
        Error: {error}
      </div>
    );
  if (!Array.isArray(products))
    return (
      <div className="flex w-full min-h-screen justify-center items-center gap-4">
        No products found, please try again later. If the problem persists,
        please contact support.
      </div>
    );

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">
        All Materials
      </h2>
      {/* Search and Filter */}
      <div className="flex flex-col justify-center mt-4 md:flex-row">
        <label className="input input-bordered flex max-w-96 items-center gap-2 mb-4 md:mb-0 md:mr-10">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <FilterDrawer onFiltersApplied={handleFiltersApplied} />
      </div>

      {products.length === 0 ? (
        <div className="flex w-full h-96 justify-center items-center">
          No products found lenght = 0
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.product_id} className="group relative">
              <div className="card bg-base-100 border h-full shadow">
                <figure className="w-full p-2 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    alt={product.name}
                    src={product.thumbnail}
                    className="w-40 h-40 object-cover cursor-pointer rounded-lg"
                    onClick={() =>
                      router.push(`/product/${product.product_id}`)
                    }
                  />
                </figure>
                <div className="card-body p-5">
                  <h2
                    className="card-title text-gray-700 font-bold text-sm md:text-xl flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      router.push(`/product/${product.product_id}`)
                    }
                  >
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500 ">
                    {product.company.name}
                  </p>
                  <div className="card-actions flex justify-between items-center">
                    <button className="btn btn-circle btn-sm hidden xl:flex">
                      <BsChat className="w-4 h-4" />
                    </button>
                    <button className="btn btn-circle btn-sm hidden xl:flex">
                      <IoCartOutline className="w-4 h-4" />
                    </button>
                    <p className="text-xl font-bold text-gray-900 text-right">
                      {product.product_variants[0].price} $
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
