export function useGetAllProducts() {
  const data = [
    {
      id: 1,
      name: "Pizza",
      quantity: 50,
      status: "published",
    },
  ];

  return { data };
}
