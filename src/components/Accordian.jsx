"use client";

import clsx from "classnames";
import md from "markdown-it";

const Accordian = ({ data, hasTag }) => {
  return (
    <>
      {data.map((val) => (
        <details
          key={val.id}
          className={clsx({
            "with-tag": hasTag,
          })}
        >
          <summary className="font-semibold text-base text-secondary">
            {val?.title}
          </summary>
          <div
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
