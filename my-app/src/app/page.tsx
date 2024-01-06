"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image'
import { Button } from "@/components/ui/button"
// import { Link } from 'lucide-react'
import Link from 'next/link' 
import React from "react"
// import NumberPage from './(crafter)/crafter/review/NumberPage'

export default function Home() {
  return (
    <div className='mt-56 flex flex-col items-center'>
      Landing Page
      <div>
        <Button className='text-red-500'>
          <Link href={"/crafter/review"}>
            Crafter Review Section
          </Link>
        </Button>
        {/* {[...Array(5)].map((_, index) => (
          <NumberPage key={index} />
        ))} */}
      </div>
    </div>
  )
}

