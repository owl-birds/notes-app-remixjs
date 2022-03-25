// react
import { useState } from "react";

// interface
interface Props {
  imageSource: string;
  imageId: string;
}

const Image = (props: Props) => {
  const { imageSource, imageId } = props;
  //   console.log(imageId);
  const [isDelete, setIsDelete] = useState(false);
  return (
    <div className="image">
      <img src={imageSource} className="image-pict" />
      <div>
        <button onClick={() => setIsDelete((prevValue) => !prevValue)}>
          delete?
        </button>
      </div>
      {isDelete ? (
        <form method="post">
          <input type="hidden" value={imageId} name="_deleteImageId" />
          <button>x</button>
        </form>
      ) : null}
    </div>
  );
};

export default Image;
