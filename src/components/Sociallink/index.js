import { memo } from "react";
import YoutubeIcon from "public/icons/Vector.svg";
import clsx from "clsx";
import Link from "next/link";

const SocialLink = ({ icons, iconProps, linkClass, wrapperClass }) => {
  return (
    <div
      className={clsx("flex gap-4", {
        [wrapperClass]: !!wrapperClass,
      })}
    >
      <Link
        // key={icon.icon}
        href={""}
        target="_blank"
        className={clsx(
          "border-solid p-2",

          {
            [linkClass]: !!linkClass,
          }
        )}
      >
        {" "}
        <div className="bg-gradient-to-tr from-primary via-primary2 to-notification rounded-full">
          <div className="bg-secondary rounded-full p-1">
            <YoutubeIcon height={62} width={62} className="rounded-full" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default memo(SocialLink);
