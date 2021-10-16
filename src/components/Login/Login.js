import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import logoBRI from "../../assets/img/logo.svg";
import "./Login.css";

function Login() {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log("Finish:", values);

        // if (values.username === "Primus" && values.password === "primusvero") {
        //     localStorage.setItem("token", "abcdesf");
        // }
    };

    // const tokensave = localStorage.getItem("token");

    // console.log(tokensave);
    // if (tokensave === "abcdesf") {
    //     return <Redirect to="/customer" />;
    // }

    return (
        <div className="login__form">
            <div className="login__card">
                <div className="card__login">
                    {/* Component Login CSS */}
                    <div className="header__login">
                        <img
                            className="logoBRI"
                            src={logoBRI}
                            aria-label="Firebase"
                        />
                    </div>
                    <div className="text__login">
                        <h2>Sign In KPR</h2>
                        <p>
                            Bagi nasabah yang sudah terdaftar, silakan masuk
                            (login).
                        </p>
                    </div>
                    <div className="note__login">
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
                            Use email : <strong>demo@minimals.cc</strong> /
                            password :<strong>&nbsp;demo1234</strong>
                        </div>
                    </div>

                    {/* Component Form Login Ant Design */}
                    <Form
                        form={form}
                        size="large"
                        name="normal_login"
                        onFinish={onFinish}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 20 }}
                    >
                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input className="field__login" />
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
                        >
                            <Input.Password className="field__login" />
                        </Form.Item>
                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    className="button__login"
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
                                    Log in
                                </Button>
                            )}
                        </Form.Item>
                        <div className="button__register-now">
                            Or
                            <Link to="/customer-register"> register now!</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
