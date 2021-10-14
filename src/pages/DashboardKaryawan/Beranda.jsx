import { Button, Image } from "antd";
import loan from "../../assets/img/loan.gif";
import { Content, Header } from "antd/lib/layout/layout";

const Beranda = () => {
    return (
        <div>
            <Header
                className="site-layout-sub-header-background header_class"
                style={{ padding: 0, background: "#fff" }}
            >
                <div className="text_header">Beranda</div>
            </Header>
            {/* --- Content --- */}
            <Content className="content__data">
                <div className="homepage" style={{ display: "initial" }}>
                    <div className="site-layout-background card">
                        <h3 className="title">Pengajuan KPR Terakhir</h3>
                        <div className="data__diri">
                            <Image src={loan} alt="" preview={false}></Image>
                            <div
                                className="homepage__content"
                                style={{ display: "initial" }}
                            >
                                <p>
                                    <span>Belum ada pengajuan KPR ?</span>
                                    Ajukan KPR online, wujudkan rumah idamanmu
                                    bersama Bank BRI
                                </p>
                            </div>
                            <div className="button__reset">
                                <Button size="large" className="button_1">
                                    Reset Data Diri
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default Beranda;
