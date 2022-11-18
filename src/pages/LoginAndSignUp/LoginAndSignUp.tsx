import React from 'react'
import {createForm} from '@formily/core'
import {createSchemaField} from '@formily/react'
import {FormItem, Input, Password, Form, Submit} from '@formily/antd'
import * as ICONS from '@ant-design/icons'
import {InputFormily} from "../../components/InputFormily";

const LoginAndSignUp = () => {
    const normalForm = createForm({
        validateFirst: true,
    });

    const phoneForm = createForm({
        validateFirst: true,
    });

    const SchemaField = createSchemaField({
        components: {
            FormItem,
            Input,
            Password
        },
        scope: {
            icon(name: string | number) {
                // @ts-ignore
                return React.createElement(ICONS[name])
            },
        },
    });

    const normalSchema = {
        type: 'object',
        properties: {
            username: {
                type: 'string',
                title: 'Username',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Input',
                'x-component-props': {
                    prefix: "{{icon('UserOutlined')}}",
                },
            },
            password: {
                type: 'string',
                title: 'Password',
                required: true,
                'x-decorator': 'FormItem',
                'x-component': 'Password',
                'x-component-props': {
                    prefix: "{{icon('LockOutlined')}}",
                },
            },
        },
    };

    return (
        <>
            <Form
                form={normalForm}
                layout="vertical"
                size="large"
                onAutoSubmit={console.log}
            >
                <InputFormily normalSchema={normalSchema}/>
                <Submit block size="large">
                    Log in
                </Submit>
            </Form>
            {/*<div*/}
            {/*    style={{*/}
            {/*        height: '100vh',*/}
            {/*        display: 'flex',*/}
            {/*        justifyContent: 'center',*/}
            {/*        alignItems: 'center',*/}
            {/*        background: '#eee',*/}
            {/*        padding: '40px 0',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Card style={{width: 400}}>*/}
            {/*        <FormPage*/}
            {/*            form={normalForm}*/}
            {/*            layout="vertical"*/}
            {/*            size="large"*/}
            {/*            onAutoSubmit={console.log}*/}
            {/*        >*/}
            {/*            <SchemaField schema={normalSchema}/>*/}
            {/*            <Submit block size="large">*/}
            {/*                Log in*/}
            {/*            </Submit>*/}
            {/*        </FormPage>*/}
            {/*        <div*/}
            {/*            style={{*/}
            {/*                marginTop: '10px',*/}
            {/*                display: 'flex',*/}
            {/*                justifyContent: 'space-between',*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <a href="#Sign up">Sign up</a>*/}
            {/*            <a href="#Forgot password">Forgot password?</a>*/}
            {/*        </div>*/}
            {/*    </Card>*/}
            {/*</div>*/}
        </>
    );
}

export default LoginAndSignUp;