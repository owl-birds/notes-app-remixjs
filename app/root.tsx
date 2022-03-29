import {
  Meta,
  Links,
  LiveReload,
  MetaFunction,
  LinksFunction,
  Outlet,
} from "remix";

import { ReactChild } from "react";

// Global styles
import globalStyles from "./styles/global.css";
// component styles
import navStyles from "./styles/layout/nav.css";
// below for list
import topicsStyles from "./styles/note/topics.css";
import postsStyles from "./styles/note/posts.css";
// below for specific component styles
import postStyles from "./styles/note/post.css";
import canvasStyles from "./styles/note/canvas.css";
import textStyles from "./styles/note/text.css";
import imageStyles from "./styles/note/image.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: navStyles },
  { rel: "stylesheet", href: postsStyles },
  { rel: "stylesheet", href: topicsStyles },
  { rel: "stylesheet", href: imageStyles },
  { rel: "stylesheet", href: canvasStyles },
  { rel: "stylesheet", href: textStyles },
  { rel: "stylesheet", href: postStyles },
];
export const meta: MetaFunction = () => {
  const description = "Note web-app using Remix";
  const keywords = "remix, react, Javasxript, note";
  return {
    description,
    keywords,
  };
};

interface Props {
  children: ReactChild;
  title?: string;
}
const Document = (props: Props) => {
  const { title, children } = props;
  return (
    <html lang="en">
      <head>
        <title>{title || "Notes App"}</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
};

// COMPONENTS
import Layout from "./components/layouts/";

export default function App() {
  return (
    <Document title="dev-Notes App">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
