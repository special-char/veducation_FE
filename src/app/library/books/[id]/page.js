import Btnnavigator from "@/components/Buttonnavigator";
import { getAllBooksData } from "@/lib/getAllBooksData";
import BtnNavigator from "public/icons/navigator.svg";
import React from "react";

const Page = async (props) => {
  const {
    data: {
      attributes: {
        books: { data },
      },
    },
  } = await getAllBooksData(props.params.id);
  return (
    <section className=" h-screen px-container md:p-0 flex flex-col gap-2">
      <div className="relative">
        {/* <Input placeholder="Find in veducation library" className="px-10" /> */}
        {/* <Search className="absolute top-5 left-4" /> */}
      </div>
      {data?.map(({ attributes: { title, description }, id }) => (
        <Btnnavigator
          key={id}
          icon={<BtnNavigator />}
          title={title}
          desc={description}
          href=""
        />
      ))}
    </section>
  );
};

export default Page;
