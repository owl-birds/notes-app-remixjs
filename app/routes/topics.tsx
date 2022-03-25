// remix stuffs
import { Outlet, redirect } from "remix";

// type
import type { FunctionComponent } from "react";
import type { ActionFunction } from "remix";

// Database
import { db } from "../utils/db.server";

// action for form : to add new topic
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const topicName = form.get("topicName");
  console.log(topicName);
  const field = {
    title: String(topicName),
  };
  await db.topic.create({
    data: field,
  });
  return redirect(`/topics`);
};

const Topics: FunctionComponent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Topics;
