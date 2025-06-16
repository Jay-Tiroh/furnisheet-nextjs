import AllFurniture from "@/components/AllFurniture";
import NavigationTab from "@/components/NavigationTab";

const Furniture = () => {
  return (
    <>
      <div>
        <NavigationTab
          breadcrumb={[{ title: "Home", href: "/" }, { title: "Furniture" }]}
        />
      </div>
      <AllFurniture />
    </>
  );
};

export default Furniture;
