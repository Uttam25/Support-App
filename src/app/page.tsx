import React from "react";
import consultants from "./data/consultants.json";
import ConsultantCard from "../components/ConsultantCard";
export interface Consultant {
  id: string;
  name: string;
  image: string;
  experience: number;
  skills: string[];
  rating: number;
  email: string;
  pricing: number;
}
export default function Home() {
  return (
    <div>
      {consultants.map((consultant: Consultant) => (
        <ConsultantCard
          key={consultant.id}
          id={consultant.id}
          name={consultant.name}
          image={consultant.image}
          experience={consultant.experience}
          skills={consultant.skills}
          rating={consultant.rating}
          email={consultant.email}
          pricing={consultant.pricing}
        />
      ))}{" "}
    </div>
  );
}
