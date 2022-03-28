import { Item } from "./styles";

const CommentItem = (props) => {
  return <Item>
      <p>{props.text}</p>
  </Item>;
};

export default CommentItem