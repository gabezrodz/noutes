import CommentItem from "../CommentItem";
import { Comments } from "./styles";

const CommentsList = (props) => {
  return (
    <Comments>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </Comments>
  );
};

export default CommentsList;
