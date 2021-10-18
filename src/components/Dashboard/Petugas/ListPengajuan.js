import { Content } from "antd/lib/layout/layout";
import TableList from "./components/TableList";
import SearchBar from "./components/SearchBar";
import DownloadFiles from "./components/DownloadFiles";

export default function ListPengajuan() {
  return (
    <Content>
      <div style={{ minHeight: 360 }}>
        <div>
          <h1>Daftar Pengajuan KPR</h1>
          <hr />
          <div className="cstm-background">
            <SearchBar />
            <DownloadFiles />
          </div>
          <TableList />
        </div>
      </div>
    </Content>
  );
}
