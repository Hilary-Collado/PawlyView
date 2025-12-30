import { useQuery } from "@tanstack/react-query";
import { Product } from "@shared/schema";
import ProductCard from "./ProductCard"; // Tu componente de tarjeta
import { Button } from "@/components/ui/button";
import portada from "@/components/img/img4.png";
import img2 from "@/components/img/img2.png";
import img3 from "@/components/img/img3.png";
import img9 from "@/components/img/img9.png";
import img8 from "@/components/img/img8.png";


const TeamComponent = () => {
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
      {/* ABOUT US */}
      <section id="about" className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  {/* Stock image: Cat looking cute */}
                  <img
                    src={img2}
                    alt="Cat"
                    className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  />
                  {/* <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop" alt="Cat" className="rounded-3xl shadow-lg w-full h-64 object-cover" /> */}
                  <div className="bg-primary p-6 rounded-3xl text-white text-center shadow-lg">
                    <span className="block text-4xl font-bold font-display mb-1">
                      10+
                    </span>
                    <span className="text-sm opacity-90">
                      Años de experiencia
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  {/* Stock image: Dog running */}
                  <img
                    src={img3}
                    alt="Dog"
                    className="rounded-3xl shadow-lg w-full h-48 object-cover"
                  />
                  {/* <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&auto=format&fit=crop" alt="Dog" className="rounded-3xl shadow-lg w-full h-48 object-cover" /> */}
                  {/* Stock image: Vet team */}
                  <img
                    src={img9}
                    alt="Team"
                    className="rounded-3xl shadow-lg w-full h-64 object-cover"
                  />
                  {/* <img src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=500&auto=format&fit=crop" alt="Team" className="rounded-3xl shadow-lg w-full h-64 object-cover" /> */}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wide">
                Sobre Nosotros
              </div>
              <h2 className="text-4xl font-display font-bold leading-tight">
                Más que veterinarios, somos amantes de los animales
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En Pawly Vet, entendemos que tu mascota es un miembro más de la
                familia. Nuestra historia comenzó con el deseo de crear un
                espacio donde la medicina veterinaria de alta calidad se
                encuentre con el trato cálido y humano.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada miembro de nuestro equipo ha sido seleccionado no solo por
                su excelencia profesional, sino por su capacidad de conectar con
                cada paciente peludo que entra por nuestra puerta.
              </p>
 
              
            </div>
          </div>
        </div>

        <div className="grid justify-center pt-16">
                <div className="flex items-center gap-4 mb-6">
                  {staticData.team?.slice(0, 3).map((member, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white p-2 pr-4 rounded-full shadow-sm border border-border/50"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center overflow-hidden">
                        {member.imageUrl ? (
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="font-bold text-accent-foreground">
                            {member.name[0]}
                          </span>
                        )}
                      </div>
                      <div className="text-sm">
                        <p className="font-bold leading-none">{member.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
      </section>
    </>
  );
};

export default TeamComponent;
