import Switch from "@/components/SwitchComponent";

const layout = ({ children }) => {
  return (
    <div>
      <div className="">
        <Switch
          childs={[
            { btnTitle: "Explore", name: "/library" },
            { btnTitle: "Your Books", name: "/library/your-books" },
          ]}
        />
      </div>
      {children}
    </div>
  );
};

export default layout;
