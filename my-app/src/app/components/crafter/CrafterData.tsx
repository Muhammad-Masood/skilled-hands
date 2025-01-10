"use client";

import { Crafter } from "@/lib/types";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Phone } from "lucide-react";

interface CrafterDataProps {
  // posts: post;
  profile: Crafter;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-sm font-medium text-gray-500">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const CrafterData = ({ props }: { props: CrafterDataProps }) => {
  const { profile } = props;
  const { bio, contact, domain, id, location, name, reviews } = profile;
  const averageRating = reviews
    ? reviews.reduce((sum, rating) => sum + rating, 0) / reviews.length
    : 0;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarFallback className="text-lg font-semibold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-2xl">{name}</CardTitle>
          <div className="flex items-center mt-1 space-x-2">
            <Badge variant="secondary">{domain}</Badge>
            <StarRating rating={averageRating} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="text-sm text-muted-foreground">{bio}</p>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
          <span className="text-sm">{contact}</span>
        </div>
      </CardContent>
    </Card>
  );
  // <div className="max-w-md mx-auto p-4 bg-white shadow-gray-500 shadow-sm rounded-md">
  //   <p className="text-3xl font-medium mb-4">{profile.name} Profile</p>

  //   <div className="mb-2">
  //     <strong className="text-lg">Name:</strong>
  //     <span className="ml-2">{profile.name}</span>
  //   </div>

  //   <div className="mb-2">
  //     <strong className="text-lg">Bio:</strong>
  //     <span className="ml-2">{profile.bio}</span>
  //   </div>

  //   <div className="mb-2">
  //     <strong className="text-lg">Domain:</strong>
  //     <span className="ml-2">{profile.domain}</span>
  //   </div>

  //   <div className="mb-2">
  //     <strong className="text-lg">Location:</strong>
  //     <span className="ml-2">{profile.location}</span>
  //   </div>

  //   <div className="mb-2">
  //     <strong className="text-lg">Contact:</strong>
  //     <span className="ml-2">{profile.contact}</span>
  //   </div>

  //   <div className="mb-2">
  //     <strong className="text-lg">Reviews:</strong>
  //     <div className="flex gap-x-3">
  //     {
  //       profile.reviews?profile.reviews.map((rev: number,index: number) => (
  //         <div className="flex items-center gap-x-1" key={index}>
  //         <span>{rev}</span>
  //         <Star className="w-5 h-5" />
  //         </div>
  //       )):<p className="font-medium">No Reviews</p>
  //     }
  //     </div>
  //   </div>
  // </div>
};

export default CrafterData;
