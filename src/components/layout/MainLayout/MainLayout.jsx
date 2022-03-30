import { Main } from "./styles";
import MainNavigation from "../MainNavigation";

const MainLayout = (props) => {
  return (
    <>
      <MainNavigation />
      <Main>{props.children}</Main>
    </>
  );
};

export default MainLayout;
