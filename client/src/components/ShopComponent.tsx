import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import ProductCard from "./ProductCard"; // Tu componente de tarjeta
import { Button } from "@/components/ui/button";

const ShopSection = () => {
  // 1. Traemos los datos de la API
//   const { data: products, isLoading } = useQuery<Product[]>({
//     queryKey: ["/api/products"],
//   });   

  const staticData = {
    services: [
      {
        id: 1,
        title: "Veterinaria",
        description: "Consultas, vacunas y cirugías con amor.",
        icon: "Stethoscope",
        category: "vet",
      },
      {
        id: 2,
        title: "Peluquería",
        description: "Baños y cortes para que luzcan increíbles.",
        icon: "Scissors",
        category: "grooming",
      },
      {
        id: 3,
        title: "Hotel",
        description: "Un segundo hogar seguro y divertido.",
        icon: "Hotel",
        category: "hotel",
      },
      {
        id: 4,
        title: "Tienda",
        description: "Alimentos y accesorios de la mejor calidad.",
        icon: "ShoppingBag",
        category: "shop",
      },
    ],
    products: [
      {
        id: 1,
        name: "Alimento Premium Perro",
        description: "Nutrición balanceada para tu mejor amigo.",
        category: "food",
        imageUrl:
          "https://images.unsplash.com/photo-1589924691195-41432c84c161?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 2,
        name: "Juguete Interactivo",
        description: "Para horas de diversión.",
        category: "toys",
        imageUrl:
          "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 3,
        name: "Collar Ajustable",
        description: "Estilo y seguridad en los paseos.",
        category: "accessories",
        imageUrl:
          "https://images.unsplash.com/photo-1605631097426-384a5665f83b?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 4,
        name: "Cama Ortopédica",
        description: "El descanso que ellos merecen.",
        category: "beds",
        imageUrl:
          "https://images.unsplash.com/photo-1591768793355-74d75b5d1e2b?w=500&auto=format&fit=crop&q=60",
      },
    ],
  };

  return (
    <>
      <section id="shop" className="py-24 bg-secondary/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-end mb-12">
      <div className="space-y-2">
        <h2 className="text-4xl font-display font-bold">Boutique & Alimentos</h2>
        <p className="text-muted-foreground">Lo mejor para consentirlos</p>
      </div>
      <Button variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-white">
        Ver todo el catálogo
      </Button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* CORRECCIÓN: Accedemos a staticData.products */}
      {staticData.products && staticData.products.length > 0 ? (
        staticData.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : ( 
        // Esqueleto de carga (Skeleton)
        Array(4).fill(null).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 animate-pulse border">
            <div className="bg-muted w-full aspect-square rounded-xl mb-4"></div>
            <div className="h-4 bg-muted w-3/4 rounded mb-2"></div>
            <div className="h-4 bg-muted w-1/2 rounded"></div>
          </div>
        ))
      )}
    </div>
    
    <Button variant="outline" className="w-full mt-8 sm:hidden border-primary text-primary">
      Ver todo el catálogo
    </Button>
  </div> 
</section>
    </>

    // <section id="shop" className="py-24 bg-secondary/30">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-end mb-12">
    //       <div className="space-y-2">
    //         <h2 className="text-4xl font-display font-bold">Boutique & Alimentos 77</h2>
    //         <p className="text-muted-foreground">Lo mejor para consentirlos</p>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {isLoading ? (
    //         // 2. Mientras carga, mostramos el Skeleton
    //         Array(4).fill(null).map((_, i) => (
    //           <div key={i} className="bg-white rounded-2xl p-4 animate-pulse border">
    //             <div className="bg-muted w-full aspect-square rounded-xl mb-4"></div>
    //             <div className="h-4 bg-muted w-3/4 rounded mb-2"></div>
    //           </div>
    //         ))
    //       ) : (
    //         // 3. Cuando llegan los datos, hacemos el map
    //         products?.map((product) => (
    //           <ProductCard key={product.id} product={product} />
    //         ))
    //       )}
    //     </div>
    //   </div>
    // </section>
  );
};

export default ShopSection;
