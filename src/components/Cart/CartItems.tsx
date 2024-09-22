"use client";
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { Cart } from "@/types/cart";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

interface CartItemsProps {
  cartItems: Cart[];
  updateQuantity: (
    cart_item_id: number,
    variant_id: number,
    newQuantity: number
  ) => void;
  deleteItem: (cart_item_id: number) => void;
}

export default function CartItems({
  cartItems,
  updateQuantity,
  deleteItem,
}: CartItemsProps) {
  const router = useRouter();
  // Group items by vendor
  const groupedItems = cartItems.reduce((acc, cart) => {
    cart.cart_items.forEach((cartItem) => {
      // Ensure item.variant and item.variant.product are defined
      if (!cartItem.variant || !cartItem.variant.product) {
        console.error("Invalid cart item structure:", cartItem);
        return;
      }

      const companyId = cartItem.variant.product.company_id;
      if (!acc[companyId]) {
        acc[companyId] = [];
      }

      // Push the cartItem to the group by companyId
      acc[companyId].push(cartItem); // Pushing the individual cart item
    });
    return acc;
  }, {} as Record<number, (typeof cartItems)[0]["cart_items"]>);


  return (
    <div className="space-y-6">
      {Object.entries(groupedItems).map(([companyId, items]) => (
        <div
          key={companyId}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          {/* Vendor Information */}
          <div className="bg-gray-100 px-4 py-2 font-semibold text-gray-700">
            {items[0].variant.product.company.name}
          </div>
          {items.map((item) => (
            <div
              key={item.cart_item_id}
              className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group m-4"
            >
              {/* Product Image */}
              <div className="md:max-w-32">
                <img
                  src={item.variant.product.thumbnail}
                  alt={item.variant.product.name}
                  className="mx-auto rounded-xl"
                />
              </div>

              {/* Product Information */}
              <div className="flex flex-col w-full space-y-3 md:grid md:grid-cols-6 md:space-x-2 md:space-y-0">
                {/* Product Details */}
                <div className="col-span-2 min-w-0">
                  <div
                    onClick={() =>
                      router.push(`/product/${item.variant.product_id}`)
                    }
                  >
                    <div className="flex flex-col max-[500px]:items-center gap-3">
                      <h6 className="font-semibold text-base leading-7 text-black truncate w-full hover:underline">
                        {item.variant.product.name}
                      </h6>
                      <h6 className="font-normal text-base leading-7 text-gray-500">
                        {item.variant.weight}
                      </h6>
                    </div>
                  </div>
                </div>

                {/* Unit Price */}
                <div className="flex items-center max-[500px]:justify-center md:justify-center h-full">
                  <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                    ${item.variant.price.toFixed(2)}
                  </h6>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center max-[500px]:justify-center h-full">
                  <div className="flex items-center justify-center h-full">
                    <button
                      className="group rounded-l-xl px-2 py-3 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                      onClick={() =>
                        updateQuantity(
                          item.cart_item_id,
                          item.variant_id,
                          item.quantity - 1
                        )
                      }
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="text"
                      className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-1/2 md:w-full placeholder:text-gray-900 py-[6px] text-center bg-transparent"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.cart_item_id,
                          item.variant_id,
                          parseInt(e.target.value) || 0
                        )
                      }
                    />
                    <button
                      className="group rounded-r-xl px-2 py-3 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                      onClick={() =>
                        updateQuantity(
                          item.cart_item_id,
                          item.variant_id,
                          item.quantity + 1
                        )
                      }
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="flex items-center max-[500px]:justify-center md:justify-center h-full">
                  <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                    ${(item.variant.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Item */}
                <div className="flex items-center justify-center h-full w-full">
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none mt-2 btn md:btn-circle sm:mt-0"
                    onClick={() => deleteItem(item.cart_item_id)}
                    aria-label="Delete item"
                  >
                    <IoTrashOutline className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
