"use client";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCartShopping } from "react-icons/fa6";
import ImageCarousel from "@/components/ProductSection/ImageCarousel";
import Productdetail from "@/components/ProductSection/Productdetail";
import mockData from "@/constants/mockProductdetail.json";
import globalApi from "@/utils/globalApi";
import ecocert from "../../../../../public/ecocert.svg";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import { quantum } from "ldrs";
import { ProductImageData, DetailedProductData } from "@/types/productDetail";
quantum.register();

interface ProductDetailProps {
  params: {
    productId: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { productId } = params;
  const [product, setProduct] = useState<DetailedProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        // const res = await globalApi.getProductById(productId);
        // setProduct(res);
        // setImageUrls(
        //   res.product_images?.map((img: ProductImageData) => img.image_url) || []
        // );
        // setSelectedVariant(res.product_variants[0]);
        // NOTE: mock data
        const product = mockData.find(
          (product) => product.product_id === parseInt(productId)
        );
        if (!product) throw new Error("Product not found");
        setProduct(product);
        setImageUrls(
          product.product_images?.map((img: ProductImageData) => img.image_url) || []
        );
        setSelectedVariant(product.product_variants[0]);
        if (product.regulations && product.regulations.length > 0) {
          setSelectedCountry(product.regulations[0].country);
        }
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  if (loading)
    return (
      <div className="flex w-full h-full justify-center items-center">
        <l-quantum size="100" speed="1.75" color="black"></l-quantum>
      </div>
    );
  if (error)
    return (
      <div className="flex w-full h-full justify-center items-center">
        Error: {error}
      </div>
    );
  if (!product)
    return (
      <div className="flex w-full h-full justify-center items-center">
        Product not found
      </div>
    );

  const handleVariantChange = (variantId: string) => {
    const selected = product.product_variants.find(
      (variant: any) => variant.variant_id === variantId
    );
    setSelectedVariant(selected);
  };

  return (
    <div className="flex flex-col w-full p-6">
      <div className="flex flex-row items-center space-x-5 md:space-x-10 w-full mb-6">
        <button
          className="btn btn-circle "
          onClick={() => window.history.back()}
        >
          <FaChevronLeft />
        </button>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a href="product">Home</a>
            </li>
            <li>
              <a>{product.function.name}</a>
            </li>
            <li>{product.name}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-background mb-6">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 ">
          <ImageCarousel images={imageUrls} />
        </div>
        {/* Product Details */}
        <div className="w-full mt-4 md:mt-0 md:pl-6 md:w-1/2">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-500">{product.company.name}</p>
            </div>

            <div className="flex items-center">
              <span className="text-3xl font-bold mr-2">
                ${selectedVariant?.price}
              </span>
            </div>

            <div>
              <div className="flex space-x-2">
                {product.product_variants.map((variant: any) => (
                  <button
                    key={variant.variant_id}
                    onClick={() => handleVariantChange(variant.variant_id)}
                    className={`btn px-4 py-2 rounded-md ${
                      selectedVariant?.variant_id === variant.variant_id
                        ? "bg-purple-200 text-purple-800"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {variant.weight}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center h-full">
              <button
                className="group rounded-l-xl px-4 py-3 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                // onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <FaMinus />
              </button>
              <input
                type="text"
                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-1/5 placeholder:text-gray-900 py-[6px] text-center bg-transparent"
                // value={item.quantity}
                // onChange={(e) =>
                //   updateQuantity(item.id, parseInt(e.target.value) || 0)
                // }
              />
              <button
                className="group rounded-r-xl px-4 py-3 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                // onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <FaPlus />
              </button>
            </div>
            <button className="btn btn-accent btn-block mt-6 ">
              <FaCartShopping className="mr-2 w-5 h-5" />
              Add to cart
            </button>

            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold mb-2">Product Details:</h3>
              <p className="mt-4">{product.tradename}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {product.description}
              </p>
              <div className="flex justify-between mt-4 items-center">
                <div className="flex flex-row items-center">
                  <h3 className="text-lg font-semibold mr-4">Certified :</h3>
                  <Image src={ecocert} alt="ecocert" width={50} height={50} />
                </div>
                <a className="link" href={product.spec_sheets_url}>
                  Download Sheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {product && product.specifications && product.regulations && (
        <Productdetail
          specifications={product.specifications}
          regulations={product.regulations}
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />
      )}
    </div>
  );
}
