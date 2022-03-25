// REMIX STUFFS
import { useLoaderData, useParams, Link, redirect } from "remix";

// REMIX Type stuffs
import type { LoaderFunction, ActionFunction } from "remix";
// react type stuffs
import type { FunctionComponent } from "react";
// COMPONENTS
import Topic from "../../components/note/topic/";
// database
import { db } from "~/utils/db.server";

// loader
export const loader: LoaderFunction = async ({ params }) => {
  const data = {
    topic: await db.topic.findUnique({
      where: {
        id: params.topicId,
      },
      select: {
        id: true,
        title: true,
      },
    }),
    posts: await db.post.findMany({
      where: {
        topicId: params.topicId,
      },
      select: {
        id: true,
        title: true,
      },
    }),
  };
  return data;
};

// ACTION
export const action: ActionFunction = async ({ request, params }) => {
  //
  const form = await request.formData();
  const topicId = params.topicId;
  if (form.get("_method") === "delete") {
    console.log(`delete this topic : ${topicId}`);
    const topic = await db.topic.findUnique({
      where: {
        id: topicId,
      },
    });
    // console.log(topic);
    if (!topic) throw new Error("Topic doesnt exist");
    await db.topic.delete({
      where: {
        id: topicId,
      },
    });
    return redirect(`/topics/`);
  } else {
    const postName = form.get("postName");
    const field = {
      title: String(postName),
      topicId: String(topicId),
    };
    // console.log("$topicId", field);\
    await db.post.create({
      data: field,
    });
    return redirect(`/topics/${topicId}`);
  }
};

// // costum type
// interface Post {
//   id: String;
//   title: String;
// }

const TopicId: FunctionComponent = () => {
  // const { topicId } = useParams();
  const { topic, posts } = useLoaderData();
  // console.log(data);
  return (
    <>
      <Topic data={posts} topic={topic} />
    </>
  );
};
export default TopicId;
