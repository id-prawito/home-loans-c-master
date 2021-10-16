import { Button, Input, Form, Upload, Select } from "antd";
import React from "react";
import { Content } from "antd/lib/layout/layout";
import { InboxOutlined } from "@ant-design/icons";
import "../../../app.css";
const { TextArea } = Input;

const FormKelengkapan = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Content className="content__data">
                <div className="form__data">
                    <div className="site-layout-background card">
                        <h3 className="title">Silahkan Isi Form Data Diri</h3>
                        <div className="data__diri">
                            <Form
                                name="basic"
                                size="large"
                                initialValues={{ remember: true }}
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                method="post"
                            >
                                <div
                                    className="homepage__content"
                                    style={{ columnGap: 20 }}
                                >
                                    <Form.Item
                                        name="alamat_rumah"
                                        label={
                                            <label className="label_field">
                                                ALAMAT RUMAH
                                            </label>
                                        }
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Silahkan isi alamat rumah!",
                                            },
                                        ]}
                                    >
                                        <TextArea
                                            rows={4}
                                            className="field__form"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="luas_rumah"
                                        label={
                                            <label className="label_field">
                                                LUAS RUMAH
                                            </label>
                                        }
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Silahkan isi luas rumah! !",
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="m2"
                                            type="number"
                                            className="field__form"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="harga_rumah"
                                        label={
                                            <label className="label_field">
                                                HARGA RUMAH
                                            </label>
                                        }
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Silahkan isi harga rumah! !",
                                            },
                                        ]}
                                    >
                                        <Input
                                            type="number"
                                            className="field__form"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="jangka_pembayaran"
                                        label={
                                            <label className="label_field">
                                                JANGKA PEMBAYARAN
                                            </label>
                                        }
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Silahkan isi jangka pembayaran! !",
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Jumlah Tahun">
                                            <Select.Option value="5">
                                                5
                                            </Select.Option>
                                            <Select.Option value="10">
                                                10
                                            </Select.Option>
                                            <Select.Option value="15">
                                                15
                                            </Select.Option>
                                            <Select.Option value="20">
                                                20
                                            </Select.Option>
                                            <Select.Option value="25">
                                                25
                                            </Select.Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item
                                        name="dokumen_pendukung"
                                        valuePropName="fileList"
                                        label={
                                            <label className="label_field">
                                                DOKUMEN PENDUKUNG
                                            </label>
                                        }
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Isi pilih dokumen pendukung !",
                                            },
                                        ]}
                                    >
                                        <Upload.Dragger className="field__form">
                                            <div className="home">
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">
                                                    Klik atau masukan file pada
                                                    area ini untuk di uplaod
                                                </p>
                                                <p className="ant-upload-hint">
                                                    Upload dokumen pendukung
                                                    dalam bentuk .pdf
                                                </p>
                                            </div>
                                        </Upload.Dragger>
                                    </Form.Item>
                                </div>
                                <Form.Item
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <div className="button-submit">
                                        <Button
                                            htmlType="submit"
                                            size="large"
                                            style={{
                                                borderRadius: 8,
                                                backgroundColor: "#1890ff",
                                                color: "#fff",
                                                fontWeight: 600,
                                                fontSize: 14,
                                            }}
                                        >
                                            SUBMIT DATA KELENGKAPAN
                                        </Button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default FormKelengkapan;
