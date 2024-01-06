"use client"
import dynamic from 'next/dynamic';
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link' 
import React from "react"

export default function Home() {
  return (
    <div className='mt-56 flex flex-col items-center'>
      Landing Page
      <div className='flex flex-col'>
        <Button className='mt-8'>
          <Link href={"/crafter/review"}>
            Crafter Review Section
          </Link>
        </Button>
        <Button className='mt-8'>
          <Link href={"/user/review"}>
            User Review Section
          </Link>
        </Button>
      </div>
    </div>
  )
}

