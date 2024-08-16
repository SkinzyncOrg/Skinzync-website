import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // validate & save it to a database, etc.

    // Mock response
    const response = {
      message: "Form data received successfully.",
      receivedData: formData,
      processedData: {
        // Mock processed data
        result: "This is a mock result based on the received data.",
      },
    };

    // Return a JSON response
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error processing form data:", error);
    return NextResponse.json(
      { message: "Failed to process form data.", error: error as Error },
      { status: 500 }
    );
  }
}
