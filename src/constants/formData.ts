export const physicalAppearance =[
  {
    id: "viscosity",
    name: "Viscosity",
    values: ["1000 rpm", "1111 rpm", "1200 rpm", "1300 rpm"],
    information: "Viscosity refers to the thickness or resistance to flow of the liquid.",
    optional : true
  },
  {
    id: "rheology",
    name: "Rheology",
    values: ["2000 rpm", "2222 rpm", "2500 rpm", "2700 rpm"],
    information: "Rheology describes the flow behavior of the liquid under applied forces.",
    optional : true
  },
  {
    id: "pearl",
    name: "Pearl",
    values: ["Low", "Medium", "High"],
    information: "Pearl refers to the pearlescent effect in the liquid, typically for aesthetic purposes.",
    optional : true
  },
  {
    id: "foamAbility",
    name: "Foam Ability",
    values: ["Low density", "Medium density", "High density"],
    information: "Foam ability measures the capacity of the liquid to produce foam when agitated.",
    optional : true
  },
  {
    id: "washingTime",
    name: "Washing Time",
    values: ["1 min", "2 min", "3 min", "5 min"],
    information: "Washing time indicates the duration required for effective cleaning.",
    optional : true
  },
  {
    id: "squeakyFeel",
    name: "Squeaky Feel",
    values: ["Low moisture", "Medium moisture", "High moisture"],
    information: "Squeaky feel refers to the sensation of 'squeakiness' after washing, often indicating cleanliness.",
    optional : true
  },
  {
    id: "postWashMoisture",
    name: "Post-wash Moisture",
    values: ["Low", "Medium", "High"],
    information: "Post-wash moisture refers to the level of moisture retained on the skin or surface after washing.",
    optional : true
  },
  {
    id: "cleaningAbility",
    name: "Cleaning Ability",
    values: ["Low", "Medium", "High"],
    information: "Cleaning ability measures the effectiveness of the liquid in removing dirt or grime.",
    optional : true
  },
  {
    id: "color",
    name: "Color",
    values: ["Soft Pink", "Light Blue", "Clear", "Pale Yellow"],
    information: "Color refers to the visual appearance of the liquid.",
    optional : true
  }
]

export const specificFunction = [
  {
    id: "specificFunction",
    name: "Specific Function",
    values: ["No more tears", "Moisturizing", "Anti-dandruff", "Color protection"],
    information: "Specific function refers to the primary feature or benefit of the product.",
    optional : true
  },
  {
    id: "claims",
    name: "Claims",
    values: ["Hypoallergenic", "Dermatologist-tested", "Paraben-free", "Sulfate-free"],
    information: "Claims refer to additional benefits or certifications associated with the product.",
    optional : true
  }
]

export const targetGroup = [
  {
    id: "gender",
    name: "Gender",
    values: ["Male", "Female", "Unisex"],
    information: "Gender refers to the target gender group for the product.",
    optional : true
  },
  {
    id: "age",
    name: "Age",
    values: ["15-20 yrs", "20-25 yrs", "25-30 yrs", "30-35 yrs", "35+ yrs"],
    information: "Age indicates the age range of the target group.",
    optional : true
  },
  {
    id: "skinType",
    name: "Skin Type",
    values: ["Oily", "Dry", "Combination", "Sensitive", "Normal"],
    information: "Skin type refers to the type of skin the product is best suited for.",
    optional : true
  }
]
