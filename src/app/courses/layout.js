import Switch from "@/components/SwitchComponent";

const layout = ({ children }) => {
  return (
    <div>
      <div className="">
        <Switch
          childs={[
            { btnTitle: "Explore", name: "/courses" },
            { btnTitle: "Your Courses", name: "/courses/your-course" },
          ]}
        />
      </div>
      {children}
    </div>
  );
};

export default layout;
