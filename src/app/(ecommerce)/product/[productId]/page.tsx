"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight, FaCartShopping } from "react-icons/fa6";
import ImageCarousel from "@/components/ProductSection/ImageCarousel";
import { products } from "@/constants/sampleProducts";
import Productdetail from "@/components/ProductSection/Productdetail";
import productData from "@/constants/mockProductdetail.json";
import { quantum } from "ldrs";
quantum.register();

interface ProductData {
  productId: string;
  name: string;
  supplier: string;
  tradename: string;
  description: string;
  spec_sheets_url: string;
  thumbnail: string;
  category: string;
  image: string[];
  product_specifications: {
    solubility: string;
    best_ph: string;
    melting_point: string;
    note: string;
  };
  regulations: any; // Update with the actual type
  variant: any[]; // Update with the actual type
}

interface ProductDetailProps {
  params: {
    productId: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { productId } = params;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedCountry, setSelectedCountry] = useState("US");

  useEffect(() => {
    //TODO: Fetch productId from the server
    async function fetchProduct() {
      try {
        // const res = await axios.get(`/api/products/${productId}`);
        // setProduct(res.data);
        // setSelectedVariant(res.data.variant[0]);
        const product = productData.find(
          (item: any) => item.productId === productId
        );
        if (product) {
          setProduct(product);
          setSelectedVariant(product.variant[0]);
        } else {
          setError("Product not found");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  if (loading)
    return (
      <div className="flex w-full h-full justify-center items-center">
        <l-quantum size="120" speed="1.75" color="black"></l-quantum>
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  const handleVariantChange = (variantId: string) => {
    const selected = product.variant.find(
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
              <a>{product.category}</a>
            </li>
            <li>{product.name}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-background mb-6">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 ">
          <ImageCarousel images={product.images} />
        </div>
        {/* Product Details */}
        <div className="w-full mt-4 md:mt-0 md:pl-6 md:w-1/2">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-gray-500">{product.supplier}</p>
            </div>

            <div className="flex items-center">
              <span className="text-3xl font-bold mr-2">
                ${selectedVariant?.price}
              </span>
            </div>

            <div>
              <div className="flex space-x-2">
                {product.variant.map((variant: any) => (
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
              <div className="flex justify-between mt-4">
                <h3 className="text-lg font-semibold">Certified :</h3>
                <a className="link" href={product.spec_sheets_url}>
                  Download Sheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Specifiaction */}
      <Productdetail
        specifications={product.product_specifications}
        regulations={product.regulations}
        selectedCountry={selectedCountry}
        onCountryChange={setSelectedCountry}
      />
    </div>
  );
}
