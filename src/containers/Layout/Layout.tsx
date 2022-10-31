import LayoutMenu from "../../components/Layout/LayoutMenu";

interface LayoutProps {}
const Layout: React.FC<LayoutProps> = () => {
  return (
    <LayoutMenu>
      <LayoutMenu.Category title={"ggg"} />

    </LayoutMenu>
  );
};

export default Layout;