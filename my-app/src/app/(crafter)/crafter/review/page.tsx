"use client"
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Star } from 'lucide-react';
import axios from 'axios';

// export default function Home() {
//   const [starRating, setStarRating] = useState(1);
//   const [CrafterId, setCrafterId] = useState('');
//   const [reviewSubmitted, setReviewSubmitted] = useState(false);
//   const [message, setMessage] = useState('');
//   const [userID, setUserID] = useState('');

//   const handleIncreaseRating = () => {
//     if (starRating < 5) {
//       setStarRating(starRating + 1);
//     }
//   };

//   const handleAddReview = () => {
//     if (!reviewSubmitted) {
//       handleIncreaseRating();
//     }
//   };

//   const handleSubmitReviewAndId = async () => {
//     try {
//       // Set CrafterId to the current value of userID
//       setCrafterId(userID);

//       // Assuming you have an API endpoint for adding reviews with both ID and rating
//       const response = await axios.post('/api/crafter/reviews', { id: userID, rating: starRating });

//       setMessage('Review and ID added successfully!');
//       setReviewSubmitted(true);
//     } catch (error) {
//       console.error('Error Adding Review and ID');
//     }
//   };

//   const renderStars = () => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <Star className="" key={i} color={i <= starRating ? 'red' : 'gray'} size={36} />
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="mt-56 flex flex-col items-center">
//       <label htmlFor="userID" className="mt-4">Enter ID:</label>
//       <input
//         type="text"
//         id="userID"
//         value={userID}
//         onChange={(e) => setUserID(e.target.value)}
//         className="border border-gray-400 p-2 rounded"
//       />
//       <div className="flex flex-row gap-x-3 mt-8">{renderStars()}</div>
//       <Button className="transition ease-in-out delay-0 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-500 mx-10 mt-10 gap-x-6 gap-y-8" onClick={handleAddReview}>Add Review</Button>
//       <Button className="transition ease-in-out delay-0 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-500 mx-10 mt-10 gap-x-6 gap-y-8" onClick={handleSubmitReviewAndId} disabled={reviewSubmitted}>Submit Review</Button>
//       {reviewSubmitted && <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black font-semibold">{message}</p>}
//     </div>
//   );
// }





// Define the Review interface
interface Review {
  id: string; 
  rating: number; 
}

export default function Home() {
  const [starRating, setStarRating] = useState(1);
  const [CrafterId, setCrafterId] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [userID, setUserID] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleIncreaseRating = () => {
    if (starRating < 5) {
      setStarRating(starRating + 1);
    }
  };

  const handleAddReview = () => {
    if (!reviewSubmitted) {
      handleIncreaseRating();
    }
  };

  const handleSubmitReviewAndId = async () => {
    try {
      // Set CrafterId to the current value of userID
      setCrafterId(userID);

      // Assuming you have an API endpoint for adding reviews with both ID and rating
      await axios.post('/api/crafter/reviews', { id: userID, rating: starRating });

      setMessage('Review and ID added successfully!');
      setReviewSubmitted(true);

      // After submitting, fetch the updated list of reviews
      fetchReviews();
    } 
    catch (error) {
      console.error('Error Adding Review and ID');
    }
  };

  const fetchReviews = async () => {
    try {
      // Fetch reviews using axios.get
      const response = await axios.get<Review[]>('/api/crafter/reviews');

      // Set the reviews state with the fetched data
      setReviews(response.data);
    }
    catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star className="" key={i} color={i <= starRating ? 'red' : 'gray'} size={36} />
      );
    }
    return stars;
  };

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="mt-56 flex flex-col items-center">
      <label htmlFor="userID" className="mt-4">Enter ID:</label>
      <input
        type="text"
        id="userID"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
        className="border border-gray-400 p-2 rounded"
      />
      <div className="flex flex-row gap-x-3 mt-8">{renderStars()}</div>
      <Button className="transition ease-in-out delay-0 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-500 mx-10 mt-10 gap-x-6 gap-y-8" onClick={handleAddReview}>Add Review</Button>
      <Button className="transition ease-in-out delay-0 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-500 mx-10 mt-10 gap-x-6 gap-y-8" onClick={handleSubmitReviewAndId} disabled={reviewSubmitted}>Submit Review</Button>

      {/* Display fetched reviews */}
      <div className="mt-8">
        <h2>Reviews:</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>{`ID: ${review.id}, Rating: ${review.rating}`}</li>
          ))}
        </ul>
      </div>

      {reviewSubmitted && <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black font-semibold">{message}</p>}
    </div>
  );
}
