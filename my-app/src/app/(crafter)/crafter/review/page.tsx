"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { Star } from 'lucide-react';
import axios from 'axios';
import Image from "next/image"
import Logo from "/public/logo.png"
import img from "/public/img.png"
import Wrapper from "@/components/ui/wrapper";
// Define the Review interface
interface Review {
  id: string; 
  rating: number; 
}

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
    <Wrapper>
          
      {/* LOGO */}
      <div className="flex justify-between">
        <Image src={Logo} alt="SKILLED HANDS" height={80} width={80}/>
        <Image src={img} alt="SK" height={90} width={90}/>

      </div>
      {/* NAV Bar */}
      <div className="bg-teal-100 h-36 blur-2xl w-full absolute -z-50 top-0"></div>


      <div className=" mt-20 flex gap-x-80">
      
      {/* Right Content */}
      <div className="">
      <div className="absolute bg-teal-100 h-[600px] w-[700px] rounded-full -z-50 blur-3xl -right-40 top-[150px]"></div>
        <h2 className="mx-8 text-5xl font-bold whitespace-pre-line text-black">Crafter Review Section</h2>
        <p className="mx-8 max-w-screen-md mt-3 text-xl text-slate-600">First Review the Crafter, than Hire according to your Satisfaction.</p>
        <div className="shadow-2xl basis-8/12 mt-8 mx-10 my-2 hover:scale-y-110 duration-100 rounded-md flex flex-col flex-1
            justify-center relative px-8 py-2 border-4 haveBorder: border-indigo-200 border-y-indigo-500">
          <ul>
            {reviews.map((review, index) => (
              <div className="mt-6">
              <div className=" text-slate-700">{`ID: ${review.id}`}</div>
              <div className=" text-slate-700">{`Rating: ${review.rating}`}</div>
            </div>  
            ))}
          </ul>
          </div>
      </div> 
      
      {/* Left Content */}
      <div className="flex flex-col items-center mt-20">
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

        {/* Display fetched reviews
        // <div className="mt-8">
        //   <h2>Reviews:</h2>
        //   <ul>
        //     {reviews.map((review, index) => (
          //       <li key={index}>{`ID: ${review.id}, Rating: ${review.rating}`}</li>
          //     ))}
          //   </ul>
        // </div> */}

        {reviewSubmitted && <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-black font-semibold">{message}</p>}
      </div>
    </div>
  </Wrapper>
  );
}
