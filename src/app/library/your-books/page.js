import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="h-screen pb-0 text-center">
      <div className="h-4/5 px-4 flex pb-0 flex-col justify-center items-center">
        <h3 className="mb-0">You haven’t purchased any books</h3>
        <p className="text-base px-3 pb-6">
          Your Purchased books will appear here
        </p>
        <Button as={Link} href="" variant="primary" className={"w-full py-3"}>
          Explore Books
        </Button>
      </div>
    </section>
  );
};

export default Page;
