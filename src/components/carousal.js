"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
  ReactElement,
} from "react";
import clsx from "classnames";

const Carousal = ({ children }) => {
  const scrollerRef = useRef();
  const [element, setElement] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const scrollPort = scrollerRef.current;
    if (scrollPort) {
      const element = scrollPort.firstElementChild;
      setElement(element);
    }
  }, []);

  const scrollLeft = useCallback(() => {
    if (scrollerRef.current && element) {
      const paddingLeft = parseInt(getComputedStyle(element)?.paddingLeft);
      scrollerRef.current.scrollTo({
        left:
          scrollerRef.current.scrollLeft + (element.clientWidth - paddingLeft),
        behavior: "smooth",
      });

      // if (element.nextElementSibling) {
      //   setElement(element.nextElementSibling);
      // }

      if (element.nextElementSibling) {
        const newIndex = index - 1;
        setIndex(newIndex);
        setElement(element.nextElementSibling);
      }
    }
  }, [index, element]);

  const scrollRight = useCallback(() => {
    if (scrollerRef.current && element) {
      const paddingRight = parseInt(getComputedStyle(element)?.paddingLeft);
      scrollerRef.current.scrollTo({
        left:
          scrollerRef.current.scrollLeft - (element.clientWidth - paddingRight),
        behavior: "smooth",
      });

      // if (element.previousElementSibling) {
      //   setElement(element.previousElementSibling);
      // }
      if (element.previousElementSibling) {
        const newIndex = index + 1;
        setIndex(newIndex);
        setElement(element.previousElementSibling);
      }
    }
  }, [index, element]);

  const moveToIndex = useCallback(
    (i) => {
      const scrollport = scrollerRef?.current;
      setIndex(i);
      setElement(scrollport?.children[i]);
      if (scrollport) {
        const element = scrollport.children[i];

        const delta = Math.abs(scrollport.offsetLeft - element.offsetLeft);
        const scrollerPadding = parseInt(
          getComputedStyle(scrollport)["padding-left"]
        );

        const pos =
          scrollport.clientWidth / 2 > delta
            ? delta - scrollerPadding
            : delta + scrollerPadding;

        scrollport.scrollTo({
          left: pos,
          behavior: "smooth",
        });
      }
    },
    [index]
  );
  return (
    <div className="carousal">
      <ul ref={scrollerRef} className="carousal__scroller">
        {React.Children.map(children, (child, index) => {
          const item = child;
          const { style, ...props } = item.props;
          return (
            <li
              key={index}
              id={index}
              className="carousal__items "
              style={style}
            >
              {React.cloneElement(item, { ...props })}
            </li>
          );
        })}
      </ul>

      <div className="relative col-span-3 mx-auto flex w-full md:hidden">
        <div className=" absolute mx-auto  flex w-full items-center justify-center gap-3">
          {React.Children.map(children, (child, i) => {
            return (
              <button
                onClick={() => moveToIndex(i)}
                className={clsx("h-2 w-2 rounded-full bg-neutral-400", {
                  "bg-primary duration-200": i === index,
                })}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
