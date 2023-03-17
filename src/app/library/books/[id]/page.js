import Btnnavigator from "@/components/Buttonnavigator";
import Input from "@/components/InputComponent";
import { getAllBooksData } from "@/lib/getAllBooksData";
import Link from "next/link";
import BtnNavigator from "public/icons/navigator.svg";
import React from "react";
import Search from "public/icons/Search.svg";
import Breadcrumbs from "@/components/Breadcrumbs";

const Page = async (props) => {
  const {
    data: {
      attributes: {
        books: { data },
      },
    },
  } = await getAllBooksData(props.params.id);
  return (
    <section className="h-screen xs:px-container md:p-0 flex flex-col gap-2">
      <div className="relative">
        <Input
          field={{ name: "search", error: "search" }}
          form={{ touched: {}, errors: {} }}
          placeholder="Find in veducation library"
          className="px-[36px] rounded-xl"
        />
        {/* <FormikForm fields={searchField} initialValues={searchInitValue} /> */}
        <Search className="absolute top-5 left-4" />
      </div>

      {data?.map(({ attributes: { title, description }, id }) => (
        <Btnnavigator
          key={id}
          component={Link}
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
