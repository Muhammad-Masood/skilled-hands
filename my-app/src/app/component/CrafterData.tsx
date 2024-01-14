"use client"
import { Crafter, post } from "@/lib/types"

interface CrafterDataProps {
    profile: Crafter,
    post: post
} 

const CrafterData = ({crafterData}: {crafterData: CrafterDataProps}) => {
    const {profile} = crafterData;
    
  return (
    <div>
      <h1>CrafterData</h1>
      <strong>ID:</strong>{profile.id}
      <strong>Name:</strong>{profile.name}
      <strong>Bio:</strong>{profile.bio}
      <strong>Domain:</strong>{profile.domain}
      <strong>Location:</strong>{profile.location}
      <strong>Reviews:</strong>
      <ul>
          {profile.reviews.map((reviews, index) => (
            // <li key={index}>{reviews}</li>
          ))}
    </ul>


    </div>

  )
}

export default CrafterData

