import { IPoll } from "@/interfaces/IPollInterface";
import React, { useCallback, useEffect, useState } from "react";

function debounce(func: any, delay: any) {
  let timeoutId: any;
  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
const Poll = ({ question, options }: IPoll) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [prevValue, setPrevValue] = useState("");
  useEffect(() => {
    setPrevValue(selectedOption);
  }, [selectedOption]);
  const fetchResults = (searchQuery: string, prevValue: string) => {
    console.log(`Fetching results for ${searchQuery}, previous value was : ${prevValue}`);
    // API call to fetch results
  };
  const debouncedFetchResults = useCallback(debounce(fetchResults, 1000), []);
  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);

    debouncedFetchResults(event.target.value, prevValue);
  };

  const handleSubmit = (event: any) => {};

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-zinc-900">{question}</h2>
        <form onSubmit={handleSubmit}>
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <label className="flex items-center text-teal-600">
                <input type="radio" name="poll" value={option} checked={selectedOption === option} onChange={handleOptionChange} className="mr-2" />
                {option}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Poll;
