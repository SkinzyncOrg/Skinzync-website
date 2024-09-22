"use client";
import React, { useEffect, useState } from "react";
import CartItems from "@/components/Cart/CartItems";
import RelatedProducts from "@/components/Cart/RelatedProducts";
import useStepStore from "@/store/checkoutStore";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import Toast from "@/components/Toast";
import axios from "axios";
import { Cart } from "@/types/cart";

export default function CartPage() {
  const { currentStep, nextStep } = useStepStore();
  const router = useRouter();

  const { cartItems, fetchCart, updateCartItem, removeCartItem } =
    useCartStore();

  const [vendorTotals, setVendorTotals] = useState<Record<number, number>>({});
  const [totalForAllVendors, setTotalForAllVendors] = useState<number>(0);

  useEffect(() => {
    fetchCart()
      .then(() => {
        calculateVendorTotals(cartItems); // Recalculate vendor totals after fetching cart
      })
      .catch(() =>
        Toast({ message: "Failed to fetch cart items", type: "error" })
      );
  }, []);

  // Recalculate vendor totals when cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      const totals = calculateVendorTotals(cartItems);
      setVendorTotals(totals);
      const allVendorsTotal = calculateTotalForAllVendors(totals);
      setTotalForAllVendors(allVendorsTotal);
    }
  }, [cartItems]);

  // Proceed to checkout
  const proceedToCheckout = () => {
    nextStep();
    router.push("/checkout");
  };

  // Calculate total for each vendor
  const calculateVendorTotals = (cartItems: Cart[]) => {
    return cartItems.reduce((acc, cart) => {
      cart.cart_items.forEach((item) => {
        // Ensure item and necessary fields are defined
        if (!item || !item.variant || !item.variant.product) {
          console.error("Invalid cart item:", item);
          return;
        }

        const vendorId = item.variant.product.company_id;
        const itemTotal = item.variant.price * item.quantity;

        if (!acc[vendorId]) {
          acc[vendorId] = 0;
        }
        acc[vendorId] += itemTotal;
      });
      return acc;
    }, {} as Record<number, number>);
  };

  const calculateTotalForAllVendors = (
    vendorTotals: Record<number, number>
  ) => {
    return Object.values(vendorTotals).reduce((acc, total) => acc + total, 0);
  };

  return (
    <section className="bg-white py-8 antialiased">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="font-semibold text-gray-900 text-4xl">Shopping Cart</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          {/* Cart items */}
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((cart) =>
                  cart.cart_items.length > 0 ? (
                    <CartItems
                      key={cart.cart_id}
                      cartItems={cartItems}
                      updateQuantity={updateCartItem}
                      deleteItem={removeCartItem}
                    />
                  ) : (
                    <p key={cart.cart_id} className="text-gray-500 text-lg">
                      No items in cart
                    </p>
                  )
                )
              ) : (
                <p className="text-gray-500 text-lg">No carts available</p>
              )}
            </div>
          </div>

          {/* Side Summary */}
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            {/* Order Summary */}
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-gray-900">
                Order Summary
              </p>
              <div className="space-y-4">
                {Object.entries(vendorTotals).map(([vendor, total]) => (
                  <dl
                    key={vendor}
                    className="flex items-center justify-between gap-4"
                  >
                    <dt className="text-base font-normal text-gray-500">
                      Vendor {vendor}
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${total.toFixed(2)}
                    </dd>
                  </dl>
                ))}

                {/* Display the total for all vendors */}
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500">
                    Total for All Vendors
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ${totalForAllVendors.toFixed(2)}
                  </dd>
                </div>
              </div>
              <button
                onClick={proceedToCheckout}
                className="btn btn-primary w-full"
              >
                Proceed to Checkout
              </button>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500"> or </span>
                <a
                  href="/product"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Voucher */}
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Do you have a voucher or gift card?
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder=""
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Apply Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
