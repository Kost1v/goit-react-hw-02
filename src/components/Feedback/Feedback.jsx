import css from "./Feedback.module.css";

const Feedback = ({ rating, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.list}>
      <li>Good: {rating.good}</li>
      <li>Neutral: {rating.neutral}</li>
      <li>Bad: {rating.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
