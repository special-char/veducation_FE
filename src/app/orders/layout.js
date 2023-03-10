import Switch from "@/components/SwitchComponent";

const layout = ({ children }) => {
  return (
    <div>
      <div className="">
        <Switch
          childs={[
            { btnTitle: "Your Orders", name: "/orders" },
            { btnTitle: "Your Courses", name: "/orders/your-course" },
          ]}
        />
      </div>
      {children}
    </div>
  );
};

export default layout;
