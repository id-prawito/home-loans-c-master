import { Input, Space, Button, Breadcrumb } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Content } from "antd/lib/layout/layout";
// import React, { useEffect, useState } from "react";
import React from "react";
// import axios from "axios";

import TabelDp from "../../components/TabelDp.jsx";

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

function DownloadBerkas() {
  return (
    <Button type="primary" icon={<DownloadOutlined />}>
      Download
    </Button>
  );
}

export default function ListPengajuanKPR() {
  return (
    <Content className="content__data">
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item>Data Pengajuan KPR</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background card">
        <h3 className="title">Data Diri Pengajuan KPR</h3>

        <div className="data__diri-table">
          <div className="cstm-background">
            <SearchBar />
            <DownloadBerkas />
          </div>
          <TabelDp />
        </div>
      </div>
    </Content>
  );
}
