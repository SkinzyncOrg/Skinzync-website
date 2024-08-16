import React from 'react'

interface FormWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function FormWrapper({ title, description, children }: FormWrapperProps) {
  return (
    <div className="hero h-full flex justify-center items-center">
      <div className="hero-content w-full max-w-md flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center text-primary">{title}</h1>
          <p className="py-6 text-center">{description}</p>
        </div>
        {children}
      </div>
    </div>
  )
}
