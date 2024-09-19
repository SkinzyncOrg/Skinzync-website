"use client";
import React, { useState, useEffect } from "react";
import FormSection from "./FormSections";
import { FormSection as FormSectionType } from "../../../types/formType";
import { useRouter } from "next/navigation";

interface MainFormProps {
  sections: FormSectionType[];
}

const MainForm: React.FC<MainFormProps> = ({ sections }) => {
  const [formData, setFormData] = useState<{ [key: string]: string | null }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()
  useEffect(() => {
    const initializeFormData = () => {
      const initialData: { [key: string]: string | null } = {};
      sections.forEach((section) => {
        section.fields.forEach((field) => {
          // Initialize required fields with "-" and optional fields with null
          initialData[field.id] = field.optional ? null : "-";
        });
      });
      setFormData(initialData);
    };

    initializeFormData();
  }, [sections]);
  const handleInputChange = (id: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const filteredData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== null)
      );

      const response = await fetch("/api/formulation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filteredData),
      });

      if (response.ok) {
        const result = await response.json();
        router.push(`/result?data=${encodeURIComponent(JSON.stringify(result))}`);
      } else {
        setError("Form submission failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred during form submission. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      {sections.map((section, index) => (
        <FormSection
          key={index}
          section={section}
          onChange={handleInputChange}
        />
      ))}
     {loading && <p className="text-center text-blue-500">Submitting...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className={`btn btn-primary ${loading ? "btn-disabled" : ""}`}
          disabled={loading}
        >
          Submit
        </button>
      </div>

    </form>
  );
};

export default MainForm;
