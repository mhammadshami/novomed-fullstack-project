import EyeIcon from "@/components/icons/EyeIcon";
import useSidebarStore from "@/store/useSidebarStore";
import clsx from "clsx";

const OpenSideBarComponent = () => {
  const openSideBar = useSidebarStore((state) => state.openSidebar);
  const isOpenSideBar = useSidebarStore((state) => state.isOpen);

  return (
    <div
      className={clsx(
        `fixed left-0 bottom-[32px]`,
        `hidden`,
        !isOpenSideBar ? "md:flex" : "md:hidden",
        `bg-primary px-[18px] py-[19px] rounded-tr-full rounded-br-full cursor-pointer`,
        `hover:bg-primary-hover`
      )}
      onClick={openSideBar}
    >
      <EyeIcon />
    </div>
  );
};

export default OpenSideBarComponent;
