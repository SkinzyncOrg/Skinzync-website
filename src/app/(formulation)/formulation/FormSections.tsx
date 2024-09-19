// FormSection.tsx
import React from 'react';
import { Option } from '../../../types/formType';

interface FormSectionProps {
  section: {
    title: string;
    fields: Option[];
  };
  onChange: (id: string, value: string) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ section, onChange }) => {
  return (
    <div className="bg-purple-50 mb-8 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {section.fields.map((field) => (
          <div key={field.id} className="form-field">
            <label htmlFor={field.id} className="block mb-2">
              {field.name}
              <span className="tooltip ml-2" data-tip={field.information}>ⓘ</span>
            </label>
            <select
              id={field.id}
              name={field.id}
              defaultValue="-"
              className="select select-bordered w-full select-sm rounded-2xl"
              onChange={(e) => onChange(field.id, e.target.value)}
            >
              <option disabled value="-">-</option>
              {field.values.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSection;
