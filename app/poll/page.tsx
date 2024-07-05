"use client";
import Poll from "@/components/Poll";

const PollPage = () => {
  const question = "What's your favorite programming language?";
  const options = ["JavaScript", "Python", "Java", "C++", "Ruby"];
  return (
    <div className="App">
      <Poll question={question} options={options} />
    </div>
  );
};

export default PollPage;
