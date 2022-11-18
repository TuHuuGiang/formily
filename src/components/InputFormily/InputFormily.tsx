import {FormItem, Input, NumberPicker, Password} from '@formily/antd'
import {createSchemaField} from "@formily/react";
import React from "react";
import * as ICONS from "@ant-design/icons";

interface InputProps {
    normalSchema: any;
}

const InputFormily = ({normalSchema}: InputProps) => {
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

    console.log(normalSchema)
    return (
        <>
            <SchemaField schema={normalSchema}/>
            <label htmlFor="" className="text-red-600">*</label>
        </>
    );
}

export default InputFormily;