// REMIX STUFFS
import { useLoaderData, redirect } from "remix";

// REMIX TYPES
import type { LoaderFunction, ActionFunction } from "remix";

// databases
import { db } from "../../utils/db.server";

// COMPONENT
import Post from "../../components/note/post/";

// LOADER
export const loader: LoaderFunction = async ({ params }) => {
  const texts = await db.text.findMany({
    where: {
      postId: params.postId,
    },
  });
  const picts = await db.pict.findMany({
    where: {
      postId: params.postId,
    },
  });
  const topic = await db.topic.findUnique({
    where: {
      id: params.topicId,
    },
    select: {
      id: true,
      title: true,
    },
  });
  const post = await db.post.findUnique({
    where: {
      id: params.postId,
    },
    select: {
      id: true,
      title: true,
    },
  });
  const data = {
    texts: [...texts],
    picts: [...picts],
    topic: topic,
    post: post,
  };
  return data;
};
// action
export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  if (form.get("_addCanvas")) {
    const imgSource = form.get("_addCanvas");
    const field = {
      postId: String(params.postId),
      imageSource: String(imgSource),
    };
    // console.log(field);
    await db.pict.create({
      data: field,
    });
    return redirect(`/topics/${params.topicId}/posts/${params.postId}`);
  } else if (form.get("_addText")) {
    const text = form.get("_addText");
    // console.log(text);
    const field = {
      postId: String(params.postId),
      content: String(text),
    };
    await db.text.create({
      data: field,
    });
    return redirect(`/topics/${params.topicId}/posts/${params.postId}`);
  } else if (form.get("_deleteImageId")) {
    const imageId = form.get("_deleteImageId");
    // console.log("IMAGE ID ::: ", imageId);
    await db.pict.delete({
      where: {
        id: String(imageId),
      },
    });
    return redirect(`/topics/${params.topicId}/posts/${params.postId}`);
  } else if (form.get("_deleteTextId")) {
    const textId = form.get("_deleteTextId");
    // console.log("TEXT ID ::: ", textId);
    await db.text.delete({
      where: {
        id: String(textId),
      },
    });
    return redirect(`/topics/${params.topicId}/posts/${params.postId}`);
  } else if (form.get("_deletePost")) {
    // console.log(params.topicId, params.postId);
    await db.post.delete({
      where: {
        id: params.postId,
      },
    });
    return redirect(`/topics/${params.topicId}/`);
  }
};

const PostId = () => {
  const { topic, post, texts, picts } = useLoaderData();
  // console.log(topic);
  return (
    <>
      <Post topic={topic} texts={texts} picts={picts} post={post} />
    </>
  );
};

export default PostId;
