import { HeaderStyled } from "./HeaderStyled.style";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => (
  <HeaderStyled>{children}</HeaderStyled>
);
export default Header;
