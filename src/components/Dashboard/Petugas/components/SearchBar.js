import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value) => console.log(value);
function SearchBar() {
  return (
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </Space>
  );
}

export default SearchBar;
