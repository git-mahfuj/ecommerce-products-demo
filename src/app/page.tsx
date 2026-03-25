import Products from "@/components/CollectionProducts";
import ProductsCollection from "@/components/Products.Collection";
export default function Home() {
  return (
    <div className="flex flex-col translate-y-16 items-center justify-center font-sans dark:bg-black">
      <h1 className="text-4xl font-medium">This is Products Section</h1>
      <div className="translate-y-10">
        <ProductsCollection/>
      </div>
    </div>
  );
}
