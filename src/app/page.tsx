import React from "react";
import BodyMap from "../components/BodyMap/BodyMap";
// import consultants from "./data/consultants.json";
// import ConsultantCard from "../components/ConsultantCard";

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
    <div className="m-5">
      {/* {consultants.map((consultant: Consultant) => (
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
      ))}{" "} */}
      <div className="flex flex-row">
        <BodyMap />
      </div>
    </div>
  );
}
