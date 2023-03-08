// This component is used to display all the products in the marketplace

// Importing the dependencies
import { useState } from "react";
// Import the useContractCall hook to read how many products are in the marketplace via the contract
import { useContractCall } from "@/hooks/contract/useContractRead";
// Import the Product and Alert components
import Product from "@/components/Product";
import ErrorAlert from "@/components/alerts/ErrorAlert";
import LoadingAlert from "@/components/alerts/LoadingAlert";
import SuccessAlert from "@/components/alerts/SuccessAlert";

// Define the ProductList component
const ProductList = () => {
  // Use the useContractCall hook to read how many products are in the marketplace contract
  const { data } = useContractCall("getProductsLength", [], true);
  // Convert the data to a number
  const productLength = data ? Number(data.toString()) : 0;
  // Define the states to store the error, success and loading messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState("");
  // Define a function to clear the error, success and loading states
  const clear = () => {
    setError("");
    setSuccess("");
    setLoading("");
  };
  // Define a function to return the products
  const getProducts = () => {
    // If there are no products, return null
    if (!productLength) return null;
    const products = [];
    // Loop through the products, return the Product component and push it to the products array
    for (let i = 0; i < productLength; i++) {
      products.push(
        <Product
          key={i}
          id={i}
          setSuccess={setSuccess}
          setError={setError}
          setLoading={setLoading}
          loading={loading}
          clear={clear}
        />
      );
    }
    return products;
  };

  // Return the JSX for the component
  return (
    <div>
      {/* If there is an alert, display it */}
      {error && <ErrorAlert message={error} clear={clear} />}
      {success && <SuccessAlert message={success} />}
      {loading && <LoadingAlert message={loading} />}
      {/* Display the products */}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {/* Loop through the products and return the Product component */}
          {getProducts()}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
