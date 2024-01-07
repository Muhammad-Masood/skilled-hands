"use client"
import { ProfileForm } from '@/app/component/Profile_form'
import ProfileData from '@/app/component/crafter/ProfileData'
import { Button } from '@/components/ui/button'
import { Crafter } from '@/lib/types'
import { SignIn, useAuth } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  const { userId } = useAuth();
  const emptyDefaultValues: Crafter = {
    id: "",
    name: "",
    bio: "",
    domain: "",
    contact: "",
    location: "",
    reviews: [],
  }

  // get profile data through api
  const response = false;

  return (
    <div>
      {
        userId ? (
          !response ? (
            <div >
              <h1 text-align="centre">Create Profile </h1>
              <ProfileForm initialProfileData={emptyDefaultValues} update={false} />
            </div>
          ) : (
            <div>
              <p>Your Profile</p>
              <ProfileData />
            </div>
          )

        ) : (
          <div className='flex items-center justify-center'>
            <SignIn afterSignInUrl={"/crafter/profile"} afterSignUpUrl={"/crafter"} />
          </div>
        )
      }
    </div>
  )
}





export default page