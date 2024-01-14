import { db } from "@/firebase";
import { Crafter } from "@/lib/types";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const domain = request.nextUrl.searchParams.get("domain");
    const q = query(collection(db, "crafters"), where("domain", "==", domain));
    const querySnapshot = await getDocs(q);
    const crafters = querySnapshot.docs.map((doc) => doc.data());
    if (!querySnapshot.empty) {
      return NextResponse.json(crafters);
    } else {
      return NextResponse.json(null);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: JSON.stringify(error) });
  }
}