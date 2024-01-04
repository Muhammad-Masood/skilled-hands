"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Star } from 'lucide-react';

export default function Home() {
  const [starRating, setStarRating] = useState(1);

  const handleIncreaseRating = () => {
    if (starRating < 5) {
      setStarRating(starRating + 1);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star className="" key={i} color={i <= starRating ? 'red' : 'gray'} size={24} />
      );
    }
    return stars;
  };

  return (
    <div className="mt-56 flex flex-col items-center">
      <div className="flex flex-row">{renderStars()}</div>
      <Button className="mx-10 mt-10 gap-x-6 gap-y-8" onClick={handleIncreaseRating}>Add Review</Button>
    </div>
  );
}
