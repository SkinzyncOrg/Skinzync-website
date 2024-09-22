// export type Cart = {
//   cart_id: number;
//   user_id: number;
//   created_at: string;
//   updated_at: string;
//   status: string;
//   cart_items: {
//     cart_item_id: number;
//     cart_id: number;
//     variant_id: number;
//     quantity: number;
//     created_at: string;
//     variant: {
//       variant_id: number;
//       product_id: number;
//       weight: string;
//       price: number;
//       product: {
//         product_id: number;
//         company_id: number;
//         function_id: number;
//         name: string;
//         thumbnail: string;
//         tradename: string;
//         description: string;
//         spec_sheets_url: string;
//         created_at: string;
//       };
//     };
//   };
// };

export type Cart = {
  cart_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  status: string;
  cart_items: CartItem[]; // Array of CartItem
};

export type CartItem = {
  cart_item_id: number;
  cart_id: number;
  variant_id: number;
  quantity: number;
  created_at: string;
  variant: {
    variant_id: number;
    product_id: number;
    weight: string;
    price: number;
    product: {
      company: {
        name: string;
        description: string;
      };
      product_id: number;
      company_id: number;
      function_id: number;
      name: string;
      thumbnail: string;
      tradename: string;
      description: string;
      spec_sheets_url: string;
      created_at: string;
    };
  };
};
