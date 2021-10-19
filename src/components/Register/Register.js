import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { Link, Redirect } from "react-router-dom";
import logoBRI from "../../assets/img/logo.svg";
import "./Register.css";

function Register() {
    // Fungsi Untuk Form
    const [status, setStatus] = useState(false);
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        const credentials = {
            username: values.username,
            password: values.password,
        };

        fetch("http://localhost:3030/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        })
            .then((data) => data.json())
            .then((response) => {
                if (response.status) {
                    setStatus(true);
                } else {
                    alert(response.error);
                }
            });
    };

    if (status) {
        return <Redirect to="/customer-login" />;
    }

    return (
        <div className="register__form">
            <div className="register__card">
                <div className="card__register">
                    {/* Component Login CSS */}
                    <div className="header__register">
                        <img
                            className="logoBRI"
                            src={logoBRI}
                            aria-label="Firebase"
                        />
                    </div>
                    <div className="text__register">
                        <h2>Register KPR</h2>
                        <p>
                            Bagi nasabah yang sudah belum terdaftar, silakan
                            untuk melakukan registrasi.
                        </p>
                    </div>
                    <div className="note__register">
                        <div className="icon">
                            <svg
                                aria-hidden="true"
                                role="img"
                                width="1em"
                                height="1em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z"
                                ></path>
                            </svg>
                        </div>
                        <div className="pesan">
                            Note :{" "}
                            <strong>
                                Pastikan username yang digunakan unik.
                            </strong>
                        </div>
                    </div>

                    {/* Component Form Register Ant Design */}
                    <Form
                        form={form}
                        name="register"
                        size="large"
                        onFinish={onFinish}
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 20 }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="username"
                            label="Username"
                            tooltip="What do you want others to call you?"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input className="field__register" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password className="field__register" />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (
                                            !value ||
                                            getFieldValue("password") === value
                                        ) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error(
                                                "The two passwords that you entered do not match!"
                                            )
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password className="field__register" />
                        </Form.Item>

                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    className="button__register"
                                    type="primary"
                                    htmlType="submit"
                                    disabled={
                                        !form.isFieldsTouched(true) ||
                                        !!form
                                            .getFieldsError()
                                            .filter(
                                                ({ errors }) => errors.length
                                            ).length
                                    }
                                >
                                    Register
                                </Button>
                            )}
                        </Form.Item>
                        <div className="button__register-now">
                            Or
                            <Link to="/customer-login"> back to Login!</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Register;
