import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetailsPage = async ({ params }) => {
  //   const { id } = params;

  const res = await fetch(`http://localhost:5000/watches/${params?.id}`, {
    cache: "no-store",
  });
  const product = await res.json();
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;
