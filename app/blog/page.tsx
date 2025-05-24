import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Blog Description",
};

const Page = (props: Props) => {
  return <div>Page</div>;
};

export default Page;
