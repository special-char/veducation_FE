"use client";
import clsx from "classnames";
import md from "markdown-it";

const Accordian = ({ data, hasTag }) => {
  return (
    <>
      {data?.map((val) => (
        <details
          key={val.id}
          className={clsx({
            "with-tag": hasTag,
          })}
        >
          <summary className="font-semibold text-base ">{val?.title}</summary>
          <div
            className="text-base text-neutral-150"
            dangerouslySetInnerHTML={{
              __html: md().render(val?.description || ""),
            }}
          ></div>
        </details>
      ))}
    </>
  );
};

export default Accordian;
