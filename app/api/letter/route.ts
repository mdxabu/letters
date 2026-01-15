import { NextResponse } from "next/server";
import lettersData from "@/data/letters.json";

export async function POST(request: Request) {
  try {
    // Parse the request body (but we won't store it)
    await request.json();

    // Get a random letter from the collection
    const letters = lettersData.letters;
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[randomIndex];

    // Return the random letter
    // Note: The user's input is never stored or logged
    return NextResponse.json({
      letter: randomLetter.content,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
