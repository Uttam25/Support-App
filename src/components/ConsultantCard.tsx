import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Consultant.css";
type ConsultantProps = {
  id: string;
  name: string;
  mode: string[];
  image: string;
  experience: number;
  skills: string[];
  rating: number;
  email: string;
  pricing: number;
};

const ConsultantCard: React.FC<ConsultantProps> = ({
  id,
  name,
  mode,
  image,
  experience,
  skills,
  rating,
  email,
  pricing,
}) => (
  <div className="card">
    <div className="card-top">
      <Image
        className="profile-img"
        src={image}
        alt={name}
        width={100}
        height={100}
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
      />

      <h3 className="title">{name}</h3>
      {/* <p className="subtitle">{mode}</p> */}
    </div>
    

    <div className="details">
      <p>Experience: {experience}</p>
      <p>Skills: {skills.join(", ")}</p>
      <p>Rating: {rating}</p>
      <p>Email: {email}</p>
      <p>${pricing} per hour</p>
    </div>
    <div className="booking">
      <Link href={`/${name}/book`}>
        <button className="button">Book Appointment</button>
      </Link>
    </div>
  </div>
);

export default ConsultantCard;
