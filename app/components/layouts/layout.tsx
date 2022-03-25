// type
import type { ReactChild } from "react";

// components
import Header from "./header/";

interface Props {
  children: ReactChild;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
