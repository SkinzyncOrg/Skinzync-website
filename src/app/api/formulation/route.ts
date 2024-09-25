// src/app/api/formulas/route.ts
"use server";
import { NextResponse, NextRequest } from 'next/server';
import moisturizerData from '@/constants/moisturizer.json';
// import sunScreenData from '@/constants/sun_screen.json';
// Import other data files as needed

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      formType,
      dosage_form,
      time_of_used,
      function: selectedFunction,
      viscosity,
      appearances,
    } = body;

    // Load data based on formType
    let data: any;
    if (formType === 'moisturizer') {
      data = moisturizerData;
    } else if (formType === 'sun_screen') {
      // data = sunScreenData;
    } else {
      // Handle other form types or return an error
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      );
    }

    // console.log('Request body:', body);
    // Access the data for the selected function
    const functionData = data[selectedFunction] || [];
    // console.log('Function data:', functionData);

    // Filter data based on user input
    const filteredFormulas = functionData.filter((item: any) => {
      return (
        item['Dosage form'] === dosage_form &&
        item['Time of use'] === time_of_used &&
        item['Viscosity'] === viscosity &&
        item['Appearance'] === appearances
      );
    });

    // console.log('Filtered formulas:', filteredFormulas);

    return NextResponse.json({ formulas: filteredFormulas || [] });
  } catch (error) {
    console.error('Error fetching formulas:', error);
    return NextResponse.json(
      { error: 'Error fetching formulas' },
      { status: 500 }
    );
  }
}
