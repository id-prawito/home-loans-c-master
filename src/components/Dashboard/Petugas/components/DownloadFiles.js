import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function DownloadFiles() {
  return (
    <Button type="primary" icon={<DownloadOutlined />}>
      Download
    </Button>
  );
}

export default DownloadFiles;
