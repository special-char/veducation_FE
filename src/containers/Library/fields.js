import Input from "@/components/InputComponent";
import Search from "public/icons/Search.svg";

export const searchInitValue = {
  search: "",
};

export const searchField = [
  {
    component: Input,
    id: "search",
    name: "search",
    // type: "Search",
    // autoComplete: "Search",
    // icon: () => <Search />,
    placeholder: "Please search..",
    className: "px-10",
  },
];
