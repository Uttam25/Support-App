import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ConsultantProps = {
  id: string;
  name: string;
  image: string;
  experience: number;
  skills: string[];
  rating: number;
  email: string;
  pricing: number;
};

const ConsultantCard: React.FC<ConsultantProps> = ({
  id, name, image, experience, skills, rating, email, pricing
}) => (
  <div>
    <Image src={image} alt={name} width={100} height={100} />
    <h3>{name}</h3>
    <p>Experience: {experience}</p>
    <p>Skills: {skills.join(', ')}</p>
    <p>Rating: {rating}</p>
    <p>Email: {email}</p>
    <p>${pricing} per hour</p>
    <Link href={`/${name}/book`}>Book Appointment</Link>
  </div>
);

export default ConsultantCard;
