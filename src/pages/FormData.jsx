import { Breadcrumb, Button, Input, Form, DatePicker, Upload } from "antd";
import React from "react";
import { Content } from "antd/lib/layout/layout";
import { InboxOutlined } from "@ant-design/icons";

const FormData = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Content className="content__data">
            <Breadcrumb className="content__breadcrumb">
                <Breadcrumb.Item>Form Data Pengajuan KPR</Breadcrumb.Item>
            </Breadcrumb>
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
                                    style={{
                                        marginBottom: 2,
                                    }}
                                    name="nik"
                                    label={
                                        <label className="label_field">
                                            No. Induk KTP
                                        </label>
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message: "Isi Data No Induk KTP !",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="nama_lengkap"
                                    label={
                                        <label className="label_field">
                                            Nama Lengkap
                                        </label>
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message: "Isi Data Nama Lengkap !",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    style={{
                                        marginBottom: 0,
                                    }}
                                >
                                    <Form.Item
                                        name="tempat_lahir"
                                        label={
                                            <label className="label_field">
                                                Tempat
                                            </label>
                                        }
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Isi Data Tempat Lahir !",
                                            },
                                        ]}
                                        style={{
                                            display: "inline-block",
                                            width: "calc(50% - 8px)",
                                        }}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={
                                            <label className="label_field">
                                                Tanggal Lahir
                                            </label>
                                        }
                                        name="tanggal_lahir"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Isi Data Tanggal Lahir !",
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
                                        />
                                    </Form.Item>
                                </Form.Item>
                                <Form.Item
                                    name="alamat"
                                    label={
                                        <label className="label_field">
                                            Alamat Saat Ini
                                        </label>
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Isi Data Alamat Saat Ini !",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="pekerjaan"
                                    label={
                                        <label className="label_field">
                                            Pekerjaan
                                        </label>
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message: "Isi Data Pekerjaan !",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="pendapatan_perbulan"
                                    label={
                                        <label className="label_field">
                                            Pendapatan Perbulan
                                        </label>
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Isi Data Pendapatan Perbulan !",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="bukti_ktp"
                                    valuePropName="fileList"
                                    label={
                                        <label
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: "#838383",
                                            }}
                                        >
                                            Bukti Selfie KTP
                                        </label>
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Isi Data Bukti Selfie KTP !",
                                        },
                                    ]}
                                >
                                    <Upload.Dragger>
                                        <div className="home">
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">
                                                Click or drag file to this area
                                                to upload
                                            </p>
                                            <p className="ant-upload-hint">
                                                Upload file selfie KTP dalam
                                                bentuk .pdf
                                            </p>
                                        </div>
                                    </Upload.Dragger>
                                </Form.Item>
                                <Form.Item
                                    name="bukti_slip_gaji"
                                    valuePropName="fileList"
                                    label={
                                        <label
                                            style={{
                                                fontSize: 15,
                                                fontWeight: 600,
                                                color: "#838383",
                                            }}
                                        >
                                            Bukti Slip Gaji
                                        </label>
                                    }
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Isi Data Bukti Slip Gaji !",
                                        },
                                    ]}
                                >
                                    <Upload.Dragger>
                                        <div className="home">
                                            <p className="ant-upload-drag-icon">
                                                <InboxOutlined />
                                            </p>
                                            <p className="ant-upload-text">
                                                Click or drag file to this area
                                                to upload
                                            </p>
                                            <p className="ant-upload-hint">
                                                Upload file selfie KTP dalam
                                                bentuk .pdf
                                            </p>
                                        </div>
                                    </Upload.Dragger>
                                </Form.Item>
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
                                            Submit
                                        </Button>
                                    </div>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Content>
    );
};

export default FormData;
