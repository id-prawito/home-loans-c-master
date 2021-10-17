import { Button, Input, Form, DatePicker, Upload } from "antd";
import React from "react";
import { Content } from "antd/lib/layout/layout";
import { InboxOutlined } from "@ant-design/icons";
import "../../../app.css";

const FormData = () => {
   const onFinish = (values) => {
      console.log("Success:", values);
   };

   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   // const [isActive, setActive] = useState(false);
   // const [message, setMessage] = useState("Success");
   // const [onSuccess, setSuccess] = useState(false);

   // const onFinish = (values) => {
   //     var startIndex =
   //         values.ktp.indexOf("\\") >= 0
   //             ? values.ktp.lastIndexOf("\\")
   //             : values.ktp.lastIndexOf("/");
   //     var filename = values.ktp.substring(startIndex);
   //     if (filename.indexOf("\\") === 0 || filename.indexOf("/") === 0) {
   //         filename = filename.substring(1);
   //     }
   //     const payload = {
   //         id_cust: 1,
   //         nik: Number(values.nik),
   //         nama_lengkap: values.fullname,
   //         tempat_lahir: values.ttl.tempat,
   //         tanggal_lahir: new Date(values.ttl.tanggal).toLocaleDateString(
   //             "en-US"
   //         ),
   //         alamat: values.alamat,
   //         pekerjaan: values.jenis_pekerjaan,
   //         pendapatan_perbulan: Number(values.pendapatan),
   //         bukti_ktp: filename,
   //     };

   //     setActive(true);
   //     axios
   //         .post(
   //             `https://697e2e1d-d698-4f34-b4a7-f9c168e24ff6.mock.pstmn.io/buat_pengajuan`,
   //             { payload }
   //         )
   //         .then((res) => {
   //             try {
   //                 if (res.status === 200) {
   //                     const result = res.data;
   //                     setActive(false);
   //                     setMessage(result.message);
   //                     setSuccess(true);
   //                     setTimeout(function () {
   //                         window.location.href = "data-pendukung";
   //                     }, 3000);
   //                 }
   //             } catch (error) {
   //                 setActive(false);
   //             }
   //         });
   // };

   return (
      <div>
         <Content className="content__data">
            <div className="form__data">
               <div className="site-layout-background card">
                  <h3 className="title">Silahkan Isi Form Data Kelengkapan</h3>
                  {/* Component Form Register Ant Design */}
                  <Form name="basic" size="large" initialValues={{ remember: true }} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" method="post">
                     <div className="homepage__content" style={{ columnGap: 20 }}>
                        <Form.Item
                           style={{
                              marginBottom: 2,
                           }}
                           name="nik"
                           label={<label className="label_field-form">NO. INDUK KTP</label>}
                           rules={[
                              {
                                 required: true,
                                 message: "Isi Data No Induk KTP !",
                              },
                           ]}
                        >
                           <Input className="field__form" />
                        </Form.Item>
                        <Form.Item
                           name="nama_lengkap"
                           label={<label className="label_field-form">NAMA LENGKAP</label>}
                           rules={[
                              {
                                 required: true,
                                 message: "Isi Data Nama Lengkap !",
                              },
                           ]}
                        >
                           <Input className="field__form" />
                        </Form.Item>

                        <Form.Item
                           style={{
                              marginBottom: 0,
                           }}
                        >
                           <Form.Item
                              name="tempat_lahir"
                              label={<label className="label_field-form">TEMPAT</label>}
                              rules={[
                                 {
                                    required: true,
                                    message: "Isi Data Tempat Lahir !",
                                 },
                              ]}
                              style={{
                                 display: "inline-block",
                                 width: "calc(50% - 8px)",
                              }}
                           >
                              <Input className="field__form" />
                           </Form.Item>
                           <Form.Item
                              label={<label className="label_field">TANGGAL LAHIR</label>}
                              name="tanggal_lahir"
                              rules={[
                                 {
                                    required: true,
                                    message: "Isi Data Tanggal Lahir !",
                                 },
                              ]}
                              style={{
                                 display: "inline-block",
                                 width: "calc(50% - 8px)",
                                 margin: "0 8px",
                              }}
                           >
                              <DatePicker
                                 style={{
                                    width: "100%",
                                 }}
                                 className="field__form"
                              />
                           </Form.Item>
                        </Form.Item>
                        <Form.Item
                           name="alamat"
                           label={<label className="label_field">ALAMAT SAAT INI</label>}
                           rules={[
                              {
                                 required: true,
                                 message: "Isi Data Alamat Saat Ini !",
                              },
                           ]}
                        >
                           <Input className="field__form" />
                        </Form.Item>
                        <Form.Item
                           name="pekerjaan"
                           label={<label className="label_field">PEKERJAAN</label>}
                           rules={[
                              {
                                 required: true,
                                 message: "Isi Data Pekerjaan !",
                              },
                           ]}
                        >
                           <Input className="field__form" />
                        </Form.Item>
                        <Form.Item
                           name="pendapatan_perbulan"
                           label={<label className="label_field">PENDAPATAN PER BULAN</label>}
                           rules={[
                              {
                                 required: true,
                                 message: "Isi Data Pendapatan Perbulan !",
                              },
                           ]}
                        >
                           <Input className="field__form" />
                        </Form.Item>
                        <Form.Item
                           name="bukti_ktp"
                           valuePropName="fileList"
                           label={<label className="label_field">BUKTI SELFIE KTP</label>}
                           rules={[
                              {
                                 required: true,
                                 message: "Isi Data Bukti Selfie KTP !",
                              },
                           ]}
                        >
                           <Upload.Dragger className="field__form">
                              <div className="home">
                                 <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                 </p>
                                 <p className="ant-upload-text">Klik atau masukan file pada area ini untuk di uplaod</p>
                                 <p className="ant-upload-hint">Upload file selfie KTP dalam bentuk .pdf</p>
                              </div>
                           </Upload.Dragger>
                        </Form.Item>
                        <Form.Item
                           name="bukti_slip_gaji"
                           valuePropName="fileList"
                           label={<label className="label_field">BUKTI SLIP GAJI</label>}
                           rules={[
                              {
                                 required: true,
                                 message: "Isi Data Bukti Slip Gaji !",
                              },
                           ]}
                        >
                           <Upload.Dragger className="field__form">
                              <div className="home">
                                 <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                 </p>
                                 <p className="ant-upload-text">Klik atau masukan file pada area ini untuk di uplaod</p>
                                 <p className="ant-upload-hint">Upload file bukti slip gaji dalam bentuk .pdf</p>
                              </div>
                           </Upload.Dragger>
                        </Form.Item>
                        <Form.Item
                           wrapperCol={{
                              offset: 8,
                              span: 16,
                           }}
                        >
                           <div className="button-submit-pengajuan">
                              <Button
                                 htmlType="submit"
                                 size="large"
                                 style={{
                                    // marginLeft: "100px",
                                    borderRadius: 8,
                                    backgroundColor: "#1890ff",
                                    color: "#fff",
                                    fontWeight: 600,
                                    fontSize: 14,
                                 }}
                              >
                                 SUBMIT DATA PENGAJUAN
                              </Button>
                           </div>
                        </Form.Item>
                     </div>
                  </Form>
               </div>
            </div>
         </Content>
      </div>
   );
};

export default FormData;
