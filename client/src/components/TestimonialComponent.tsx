import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import ProductCard from "./ProductCard"; // Tu componente de tarjeta
import { Button } from "@/components/ui/button";
import portada from "@/components/img/img4.png";
import img2 from "@/components/img/img2.png";
import img3 from "@/components/img/img3.png";
import img9 from "@/components/img/img9.png";
import img8 from "@/components/img/img8.png";
import { Star } from "lucide-react";


const TestimonialComponent = () => {
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
    testimonials: [
      {
        id: 1,
        clientName: "María Pérez",
        petName: "Luna",
        content: "¡El mejor trato para Luna! El hotel es maravilloso.",
        rating: 5,
      },
      {
        id: 2,
        clientName: "Carlos Gómez",
        petName: "Max",
        content: "La peluquería dejó a Max hermoso. Súper recomendados.",
        rating: 5,
      },
      {
        id: 3,
        clientName: "Laura Díaz",
        petName: "Coco",
        content: "Veterinarios muy profesionales y cariñosos.",
        rating: 5,
      },
    ],
    team: [
      {
        id: 1,
        name: "Dra. Ana López",
        role: "Veterinaria Principal",
        imageUrl:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 2,
        name: "Pedro Ramírez",
        role: "Estilista Canino",
        imageUrl:
          "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60",
      },
      {
        id: 3,
        name: "Sofía Martínez",
        role: "Asistente Veterinaria",
        imageUrl:
          "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=500&auto=format&fit=crop&q=60",
      },
    ],
  };

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-16">
            Huellas Felices
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {staticData.testimonials?.length ? (
              staticData.testimonials.map((t, i: number) => (
                <div key={i} className="bg-background p-8 rounded-3xl relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-sm">
                    💬
                  </div>
                  <div className="flex justify-center gap-1 text-yellow-400 mb-4 mt-2">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    "{t.content}"
                  </p>
                  <div className="font-bold text-lg">{t.clientName}</div>
                  <div className="text-sm text-primary font-medium">
                    {t.petName && `Dueño de ${t.petName}`}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-muted-foreground">
                Cargando opiniones tt...
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialComponent;
