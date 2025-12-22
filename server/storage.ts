import { db } from "./db";
import { services, products, testimonials, team, type Service, type Product, type Testimonial, type TeamMember } from "@shared/schema";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getProducts(): Promise<Product[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getTeam(): Promise<TeamMember[]>;
  seed(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async getTeam(): Promise<TeamMember[]> {
    return await db.select().from(team);
  }

  async seed(): Promise<void> {
    const existingServices = await this.getServices();
    if (existingServices.length === 0) {
      await db.insert(services).values([
        { title: "Veterinaria", description: "Consultas, vacunas y cirugías con amor.", icon: "Stethoscope", category: "vet" },
        { title: "Peluquería", description: "Baños y cortes para que luzcan increíbles.", icon: "Scissors", category: "grooming" },
        { title: "Hotel", description: "Un segundo hogar seguro y divertido.", icon: "Hotel", category: "hotel" },
        { title: "Tienda", description: "Alimentos y accesorios de la mejor calidad.", icon: "ShoppingBag", category: "shop" },
      ]);
    }

    const existingProducts = await this.getProducts();
    if (existingProducts.length === 0) {
      await db.insert(products).values([
        { name: "Alimento Premium Perro", description: "Nutrición balanceada para tu mejor amigo.", category: "food", imageUrl: "https://images.unsplash.com/photo-1589924691195-41432c84c161?w=500&auto=format&fit=crop&q=60" },
        { name: "Juguete Interactivo", description: "Para horas de diversión.", category: "toys", imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&auto=format&fit=crop&q=60" },
        { name: "Collar Ajustable", description: "Estilo y seguridad en los paseos.", category: "accessories", imageUrl: "https://images.unsplash.com/photo-1605631097426-384a5665f83b?w=500&auto=format&fit=crop&q=60" },
      ]);
    }

    const existingTestimonials = await this.getTestimonials();
    if (existingTestimonials.length === 0) {
      await db.insert(testimonials).values([
        { clientName: "María Pérez", petName: "Luna", content: "¡El mejor trato para Luna! El hotel es maravilloso.", rating: 5 },
        { clientName: "Carlos Gómez", petName: "Max", content: "La peluquería dejó a Max hermoso. Súper recomendados.", rating: 5 },
        { clientName: "Laura Díaz", petName: "Coco", content: "Veterinarios muy profesionales y cariñosos.", rating: 5 },
      ]);
    }

    const existingTeam = await this.getTeam();
    if (existingTeam.length === 0) {
      await db.insert(team).values([
        { name: "Dra. Ana López", role: "Veterinaria Principal", imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60" },
        { name: "Pedro Ramírez", role: "Estilista Canino", imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&auto=format&fit=crop&q=60" },
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
