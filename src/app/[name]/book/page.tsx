"use client";
import React, { useEffect, useState } from "react";
import CustomCalendar from "@/src/components/CustomCalendar";
import consultants from "../../data/consultants.json";

type Consultant = {
  name: string;
};

const BookingPage: React.FC = () => {
  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [totalCharge, setTotalCharge] = useState(0);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const slug = decodeURIComponent(window.location.pathname.split("/")[1]);
    const foundConsultant: any = consultants.find((c) => c.name === slug);
    setConsultant(foundConsultant);
  }, []);

  const calculateCharge = () => {
    if (!startTime || !endTime) return;
    const startHour = parseInt(startTime, 10);
    const endHour = parseInt(endTime, 10);
    const hours = endHour - startHour;
    if (hours > 0) {
      setTotalCharge(hours * 500); // Assuming 500 INR per hour
    } else {
      alert("End time must be later than start time.");
      setTotalCharge(0); // Reset charge if time range is invalid
    }
  };

  useEffect(() => {
    calculateCharge();
  }, [startTime, endTime]);

  const handleBooking = () => {
    console.log("Booking details", {
      userName,
      phoneNumber,
      selectedDate,
      startTime,
      endTime,
      totalCharge,
      email
    });
  };

  if (!consultant) {
    return <div>No consultant found</div>;
  }

  return (
    <div>
      <h1>Book an Appointment with {consultant.name}</h1>
      <CustomCalendar onDateChange={setSelectedDate} />
      <select
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      >
        {Array.from({ length: 12 }, (_, i) => 9 + i).map((hour) => (
          <option key={hour} value={hour}>
            {hour}:00
          </option>
        ))}
      </select>
      <select
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
        onBlur={calculateCharge}
      >
        {Array.from({ length: 12 }, (_, i) => 9 + i).map((hour) => (
          <option key={hour} value={hour}>
            {hour}:00
          </option>
        ))}
      </select>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
      />
      {totalCharge > 0 && (
        <div>
          <p>
            Total Charge:{" "}
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
            }).format(totalCharge)}
          </p>
          <button onClick={handleBooking}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
