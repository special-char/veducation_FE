import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <Button as={Link} href="/about" variant="primary">
        Continue to Pyment
      </Button>
    </div>
  );
};

export default Page;
