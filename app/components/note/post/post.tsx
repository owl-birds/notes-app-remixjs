// remix
import { Link, Scripts } from "remix";
// react
import { useState } from "react";
// costum Props
interface Props {
  texts: Array<any>;
  picts: Array<any>;
  topic: {
    id: String;
    title: String;
  };
  post: {
    id: String;
    title: String;
  };
}

// COMPONENTS
import NewCanvas from "../new-canvas";
import NewText from "../new-text";
import Text from "../text";
import Image from "../image";

const Post = (props: Props) => {
  const { texts, post, picts, topic } = props;
  // STATE
  const [isCanvas, setIsCanvas] = useState(false);
  const [isText, setIsText] = useState(false);
  // console.log("TEXTS : ", texts);
  // console.log("PICTS", picts);
  // console.log(post);
  return (
    <section className="post-content">
      <div className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <h4 className="post-topic-title">
          about <span>{topic.title}</span>
        </h4>
        <div className="post-menu">
          <Link className="post-back" to={`/topics/${topic.id}`}>
            back
          </Link>
          <form method="post">
            <input type="hidden" name="_deletePost" value="delete" />
            <button className="post-delete">delete</button>
          </form>
        </div>
      </div>
      <div className="canvas-text">
        <button onClick={() => setIsCanvas((prevValue) => !prevValue)}>
          canvas
        </button>
        <button onClick={() => setIsText((prevValue) => !prevValue)}>
          text
        </button>
        <Scripts />
      </div>
      {isText ? <NewText /> : null}
      {isCanvas ? <NewCanvas /> : null}
      <div className="text-box-outer">
        {texts.map((text) => {
          return <Text content={text.content} textId={text.id} key={text.id} />;
        })}
      </div>
      <div className="image-box">
        {picts.length !== 0
          ? picts.map((pict) => {
              return (
                <Image
                  imageId={pict.id}
                  imageSource={pict.imageSource}
                  key={pict.id}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export default Post;
