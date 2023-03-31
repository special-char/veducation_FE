import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import Book from "public/pdfbook.png";
import Image from "next/image";
import Style from "./yourbook.module.css";

const Page = () => {
  const data = [
    // {
    //   id: 1,
    //   image: Book,
    //   link: "",
    // },
    // {
    //   id: 1,
    //   image: Book,
    //   link: "",
    // },
    // {
    //   id: 1,
    //   image: Book,
    //   link: "",
    // },
    // {
    //   id: 1,
    //   image: Book,
    //   link: "",
    // },
    // ,
    // {
    //   id: 1,
    //   image: Book,
    //   link: "",
    // },
    // {
    //   id: 1,
    //   image: Book,
    //   link: "",
    // },
  ];
  return (
    <section className={Style.yourbook}>
      <div className={Style.yourbook__container}>
        {data.length > 0 ? (
          data?.map((val) => {
            return (
              <Link key={val.id} href="/readbook/1">
                <div className="relative aspect-image min-h-[20px]">
                  <Image src={Book} fill className="" />
                </div>
              </Link>
            );
          })
        ) : (
          <div className="grid col-span-3 h-[79vh]">
            <div className="px-4 flex pb-0 flex-col justify-center items-center">
              <h3 className="mb-0">You haven’t purchased any books</h3>
              <p className="text-base px-3 pb-6">
                Your Purchased books will appear here
              </p>
              <Button
                as={Link}
                href=""
                variant="primary"
                className={"w-full py-3"}
              >
                Explore Books
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* {!data && (
        <div className="h-4/5 px-4 flex pb-0 flex-col justify-center items-center">
          <h3 className="mb-0">You haven’t purchased any books</h3>
          <p className="text-base px-3 pb-6">
            Your Purchased books will appear here
          </p>
          <Button as={Link} href="" variant="primary" className={"w-full py-3"}>
            Explore Books
          </Button>
        </div>
      )} */}
      {/* <div className="h-4/5 px-4 flex pb-0 flex-col justify-center items-center">
        <h3 className="mb-0">You haven’t purchased any books</h3>
        <p className="text-base px-3 pb-6">
          Your Purchased books will appear here
        </p>
        <Button as={Link} href="" variant="primary" className={"w-full py-3"}>
          Explore Books
        </Button>
      </div> */}
    </section>
  );
};

export default Page;
