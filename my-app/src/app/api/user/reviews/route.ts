
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase";
import { CrafterRevDetails } from "@/lib/types";
import { addDoc, Firestore, doc, documentId, setDoc, getDoc, collection, updateDoc, getDocs } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  const msg = {
    message: "User Review stored!"
  };

  try {
    const CrafterRevBody: CrafterRevDetails = await request.json();
    console.log(CrafterRevBody);

    // Reference to the "reviews" collection under the specific "crafters" document
    const RevCollectionReference = collection(db, "user", "HhRTWOJ2GeeGuVTwgeaj", "reviews");

    // Add a new document to the "reviews" collection
    await addDoc(RevCollectionReference, CrafterRevBody);

    return NextResponse.json(msg);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Error storing User Review" });
  }
}

// export async function GET(request: NextRequest, response: NextResponse) {
//   try {
//     const id: string | null = request.nextUrl.searchParams.get("id");

//     if (!id) {
//       return NextResponse.json({ message: "No ID provided in the request", status: 400 });
//     }

//     const ReviewsDetailsDocRef = doc(db, "user", "HhRTWOJ2GeeGuVTwgeaj", "reviews", id);
//     const ReviewsDetailsData = await getDoc(ReviewsDetailsDocRef);

//     if (ReviewsDetailsData.exists()) {
//       const responseData = {
//         id: ReviewsDetailsData.id,
//         ...ReviewsDetailsData.data(),
//       };

//       return NextResponse.json(responseData);
//     } else {
//       return NextResponse.json({ message: "No Reviews Found", status: 404 });
//     }
//   } catch (error) {
//     console.error("Error in GET request:", error);
//     return NextResponse.json({ error: "Internal Server Error", status: 500 });
//   }
// }

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    // Reference to the "reviews" collection under the specific "crafters" document
    const RevCollectionReference = collection(db, "user", "HhRTWOJ2GeeGuVTwgeaj", "reviews");

    // Get all documents from the "reviews" collection
    const reviewsSnapshot = await getDocs(RevCollectionReference);

    // Extract data from each document
    const responseData = reviewsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data() as CrafterRevDetails,
    }));

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
// export async function GET(request: NextRequest, response: NextResponse) {
//   try {
//     const id: string | null = request.nextUrl.searchParams.get("id");

//     if (!id) {
//       return NextResponse.json({ message: "No ID provided in the request", status: 400 });
//     }

//     const ReviewsDetailsDocRef = doc(db, "Reviews", id);
//     const ReviewsDetailsData = await getDoc(ReviewsDetailsDocRef);

//     if (ReviewsDetailsData.exists()) {
//       const responseData = {
//         id: ReviewsDetailsData.id,
//         ...ReviewsDetailsData.data(),
//       };

//       return NextResponse.json(responseData);
//     } else {
//       return NextResponse.json({ message: "No Reviews Found", status: 404 });
//     }
//   } catch (error) {
//     console.error("Error in GET request:", error);
//     return NextResponse.json({ error: "Internal Server Error", status: 500 });
//   }
// }



// import { NextRequest, NextResponse } from "next/server";
// import { db } from "@/firebase";
// import { CrafterRevDetails } from "@/lib/types";
// import { addDoc, Firestore, doc, documentId, setDoc, getDoc, collection, updateDoc } from 'firebase/firestore';
// import { INTERNALS } from "next/dist/server/web/spec-extension/request";

// export async function POST(request:NextRequest){
 
//   const msg = {
//     message: "Crafter Review stored!"
// }
 
//   const CrafterRevBody: CrafterRevDetails = await request.json();
//   console.log(CrafterRevBody); 
//   // const RevDocReference = doc(db,"crafters", "QXbOxuE7VkSber4lD8iw", "reviews", "88OWzV8GYUt7XhH47kdd", CrafterRevBody.id);
  
//   const RevDocReference = doc(db, "crafters", CrafterRevBody.id, "reviews")
//   const newDocumentRef = await addDoc(RevDocReference, {
//     // Your document data here
//     id: "2",
//     review: 2
//   });
//   const RevId = await setDoc(RevDocReference,CrafterRevBody);
//   // updateDoc(RevDocReference, {id: RevId.id});
//   await updateDoc(RevDocReference, {id: , review: });

//   return NextResponse.json(msg);
// }
// Add Reviews Details
// export async function POST(request: NextRequest) {
//   try {
//     const CrafterRevBody: CrafterRevDetails = await request.json();

//     const newDocumentId = db.collection('reviews').doc().id;

//     const newDocumentRef = doc(db, "cities", newDocumentId);
//     await setDoc(newDocumentRef, CrafterRevDetails);

//     await setDoc(doc(db, "crafters", "newDocumentId"), {
//       id: 1,
//       review: 2
//     });

//     if (!CrafterRevBody.id || !CrafterRevBody.review) {
//       return NextResponse.json({
//         message: "Please fill this Review Section. 'id' and 'review' are required.",
//         status: 400,
//       });
//     }

//     const ReviewData: CrafterRevDetails = {
//       ...CrafterRevBody,
//     };

//     // const CReviewRef = collection(db, "Reviews");
//     const storeReviewDetailsDocRef = await addDoc(CReviewRef, ReviewData);
//     const documentId = storeReviewDetailsDocRef.id;

//     console.log("Review added with ID:", documentId);

//     return NextResponse.json({
//       message: "ID and review added successfully.",
//       status: 200,
//       id: documentId, 
//     });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({
//       message: "An error occurred. Please check your request and try again.",
//       error: error,
//       status: 500,
//     });
//   }
// }






// import ReviewDetails from "@/app/(user)/Revdetails";
// import { db } from "@/firebase";
// import { collection, doc, setDoc } from "firebase/firestore";
// import { NextRequest, NextResponse } from "next/server";


// // export async function POST(request: NextRequest) {
// //     console.log(request);
// //     return NextResponse.json({ message: "Post Review" });
// // }
// // export async function GET(request: NextRequest) {
// //     console.log(request);
// //     return NextResponse.json({ message: "Get Review" });
// // }


// export async function POST(request: NextRequest) {
//   try {
//     const jobReviewsBody: ReviewDetails = await request.json();

//     // Check if the review rating is within the range of 1 to 5
//     // const isValidRating = jobReviewsBody.rating >= 1 && jobReviewsBody.rating <= 5;

//     // if (!isValidRating) {
//     //   return NextResponse.json({
//     //     error: "Invalid review rating. Please provide a rating between 1 and 5.",
//     //     status: 400,
//     //   });
//     // }

//     const jobReviewsData: ReviewDetails = {
//       ...jobReviewsBody,
//     };

//     const jobReviewsDocRef = doc(collection(db, "User"), "REVIEWS");

//     const storeJobReviewsDocRef = await setDoc(jobReviewsDocRef, jobReviewsBody);

//     console.log(storeJobReviewsDocRef);

//     return NextResponse.json({
//       message: "Reviews Details Stored",
//       data: storeJobReviewsDocRef,
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Please fill this Review Section", error: error, status: 404 });
//   }
// }


// // export async function POST(request: NextRequest) {
// //     try {
// //     const jobReviewsBody: ReviewDetails = await request.json();    
// //     const jobReviewsData: ReviewDetails = {
// //     ...jobReviewsBody,
// //     }
// //     const jobReviewsDocRef = doc(collection(db, "users"), "REVIEWS");
// //     const storeJobReviewsDocRef = await setDoc (
// //     jobReviewsDocRef,
// //     jobReviewsBody
// //     );
// //     console.log(storeJobReviewsDocRef);
// //     return NextResponse.json({ message: "Reviews Details Stored", data: storeJobReviewsDocRef, status: 200 });
// //     }
// //     catch (error) {
// //     console.log(error);
// //     return NextResponse.json({ error: error, status: 404 });
// //     }}