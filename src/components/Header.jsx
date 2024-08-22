import { Menu } from "antd";
import PropTypes from "prop-types";

function Header({ selectedKeys, onTabClick }) {
  const items = [
    { key: "home", label: "Home" },
    { key: "search", label: "Search All Movies" },
    { key: "favorite", label: "My Favorites" },
  ];

  return (
    <>
      <div className="demo-logo">
        <img
          style={{
            height: "48px",
            width: "48px",
            position: "absolute",
            top: "8px",
          }}
          src="src/assets/MovieLogo.jpg"
        />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selectedKeys}
        onClick={onTabClick}
        // defaultSelectedKeys={['1']}
        items={items}
        style={{ width: "321px" }}
      />
    </>
  );
}

Header.propTypes = {
  selectedKeys: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Header;
