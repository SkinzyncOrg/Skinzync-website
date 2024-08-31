import React, { useState } from "react";
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import axios from "axios";

// Define the type for the filter options
type FilterOptions = {
  functions: string[];
  shippedFrom: string[];
  supplier: string[];
};

// Define the type for the selected filters
type SelectedFilters = {
  functions: string[];
  shippedFrom: string[];
  supplier: string[];
};

type FilterDrawerProps = {
  onFiltersApplied: (products: any[]) => void; // Callback function to pass products to ProductPage
};

// Define constants for price range limits
const MIN_PRICE_LIMIT = 0;
const MAX_PRICE_LIMIT = 100000; // Maximum allowed price
const MAX_DIFFERENCE = 100000; // Maximum difference allowed between min and max price

export default function FilterDrawer({ onFiltersApplied }: FilterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [activeAccordion, setActiveAccordion] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    functions: [],
    shippedFrom: [],
    supplier: [],
  });

  const filterOptions: FilterOptions = {
    functions: [
      "Cleansers",
      "Emollients",
      "Occulusive",
      "Exfoliants",
      "Humectants",
    ],
    shippedFrom: ["Domestic", "Oversea", "Bangkok"],
    supplier: [
      "Ashland",
      "Dow Chemical Company",
      "BASF",
      "Elementis",
      "Croda International",
      "Eliens",
    ],
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = Math.max(
      MIN_PRICE_LIMIT,
      Math.min(MAX_PRICE_LIMIT, parseInt(e.target.value))
    );
    const newPriceRange = [...priceRange];
    newPriceRange[index] = newValue;

    // Ensure that the difference between min and max doesn't exceed the allowed limit
    if (index === 0 && newPriceRange[1] - newPriceRange[0] > MAX_DIFFERENCE) {
      newPriceRange[1] = newPriceRange[0] + MAX_DIFFERENCE;
    } else if (
      index === 1 &&
      newPriceRange[1] - newPriceRange[0] > MAX_DIFFERENCE
    ) {
      newPriceRange[0] = newPriceRange[1] - MAX_DIFFERENCE;
    }

    setPriceRange(newPriceRange as [number, number]);
  };

  const handleFilterChange = (
    filterType: keyof SelectedFilters,
    option: string
  ) => {
    setSelectedFilters((prev) => {
      const currentSelections = prev[filterType];
      if (currentSelections.includes(option)) {
        return {
          ...prev,
          [filterType]: currentSelections.filter((item) => item !== option),
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentSelections, option],
        };
      }
    });
  };

  const clearFilters = () => {
    setPriceRange([0, 100000]);
    setSelectedFilters({
      functions: [],
      shippedFrom: [],
      supplier: [],
    });
    setActiveAccordion("");
  };
  // TODO: Apply filters API
  const applyFilters = async () => {
    const filterData = {
      priceRange,
      selectedFilters,
    };
    try {
      const res = await axios.post("/api/apply-filters", filterData);
      onFiltersApplied(res.data.products); // Pass filtered products to ProductPage
      toggleDrawer();
    } catch (err) {
      console.error(err);
    }
  };

  const openAccordion = (section: string) => {
    setActiveAccordion(section);
    setIsOpen(true);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    clearFilters();
  }
  return (
    <div>
      

      {/* Jump Buttons */}
      <div className="overflow-x-auto whitespace-nowrap space-x-2 flex flex-nowrap">
      <button onClick={toggleDrawer} className="btn btn-primary">
        <FaFilter />
        Filters
      </button>
        {Object.keys(filterOptions).map((key) => (
          <button
            key={key}
            onClick={() => openAccordion(key)}
            className="btn btn-outline"
          >
            {key.charAt(0).toUpperCase() +
              key.slice(1).replace(/([A-Z])/g, " $1")}{" "}
            <IoChevronDown/>
          </button>
        ))}
      </div>

      <div className="relative z-50">
        {/* Background Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={toggleDrawer}
          />
        )}

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <button
                onClick={toggleDrawer}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Price Range</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="input input-bordered w-1/2"
                  min={MIN_PRICE_LIMIT}
                  max={MAX_PRICE_LIMIT}
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="input input-bordered w-1/2"
                  min={MIN_PRICE_LIMIT}
                  max={MAX_PRICE_LIMIT}
                />
              </div>
              {priceRange[1] - priceRange[0] > MAX_DIFFERENCE && (
                <p className="text-red-500 text-sm">
                  The difference between minimum and maximum price can't exceed{" "}
                  {MAX_DIFFERENCE}.
                </p>
              )}
            </div>

            {/* Accordion Filters */}
            {Object.entries(filterOptions).map(([key, options]) => (
              <div key={key} className="mb-4 border-b pb-2">
                <button
                  onClick={() => toggleAccordion(key)}
                  className="flex justify-between items-center w-full"
                >
                  <span className="font-semibold">
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, " $1")}{" "}
                    {/* Format text */}
                  </span>
                  {activeAccordion === key ? (
                    <IoChevronUp size={20} />
                  ) : (
                    <IoChevronDown size={20} />
                  )}
                </button>
                {activeAccordion === key && (
                  <div className="mt-2 space-y-2">
                    {options.map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          className="checkbox mr-2"
                          checked={selectedFilters[
                            key as keyof SelectedFilters
                          ].includes(option)}
                          onChange={() =>
                            handleFilterChange(
                              key as keyof SelectedFilters,
                              option
                            )
                          }
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Selected Filters Display */}
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <h3 className="font-semibold mb-2">Selected Filters:</h3>
              {Object.entries(selectedFilters).map(
                ([key, selections]) =>
                  selections.length > 0 && (
                    <div key={key} className="mb-2">
                      <strong>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </strong>{" "}
                      {selections.join(", ")}
                    </div>
                  )
              )}
              {priceRange[0] !== 0 || priceRange[1] !== 100000 ? (
                <div>
                  <strong>Price Range:</strong> {priceRange[0]} -{" "}
                  {priceRange[1]}
                </div>
              ) : null}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-100 flex justify-between">
            <button onClick={clearFilters} className="btn btn-outline">
              Clear All
            </button>
            <button onClick={applyFilters} className="btn btn-primary">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
