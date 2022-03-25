// react
import { useState } from "react";

interface Props {
  content: string;
  textId: string;
}
const Text = (props: Props) => {
  const { content, textId } = props;
  // STATE
  const [isDelete, setIsDelete] = useState(false);
  return (
    <div className="text-box-inside">
      <p className="text">{content}</p>
      <div>
        <button onClick={() => setIsDelete((prevValue) => !prevValue)}>
          delete?
        </button>
      </div>
      {isDelete ? (
        <form method="post">
          <input type="hidden" name="_deleteTextId" value={textId} />
          <button>x</button>
        </form>
      ) : null}
    </div>
  );
};

export default Text;
