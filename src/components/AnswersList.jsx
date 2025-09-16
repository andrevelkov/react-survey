import PropTypes from "prop-types";
import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers }) {
  // console.log("Inside AnswersList: ", answers)

  return (
    <ul>
      {answers.map((answerItem, i) => (
        // console.log(answers),
        // console.log(answerItem[i]),
        // console.log(answerItem[i].spendTime),
        // console.log(answerItem[i].username)

        <AnswersItem answerItem={{
          username: answerItem.username,
          color: answerItem.color,
          spendTime: answerItem.spendTime,
          review: answerItem.review
        }} key={i} />

      ))}
    </ul>
  );
}

// Add prop types
AnswersList.propTypes = {
  answers: PropTypes.array.isRequired,
}