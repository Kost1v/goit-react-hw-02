import { useEffect, useState } from "react";

import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const App = () => {
  const [rating, setRating] = useState(() => {
    const savedRating = window.localStorage.getItem("saved-rating");

    if (savedRating !== null) {
      return JSON.parse(savedRating);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-rating", JSON.stringify(rating));
  }, [rating]);

  const totalFeedback = rating.good + rating.neutral + rating.bad;
  const positiveFeedback = Math.round((rating.good / totalFeedback) * 100);
  
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setRating({ ...rating, good: rating.good + 1 });
    }
    if (feedbackType === "neutral") {
      setRating({ ...rating, neutral: rating.neutral + 1 });
    }
    if (feedbackType === "bad") {
      setRating({ ...rating, bad: rating.bad + 1 });
    }
  };
  
  const resetFeedback = () => {
    setRating({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          rating={rating}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
