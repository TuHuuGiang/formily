export interface IInput {
    type: string
    properties: Properties
}

export interface Properties {
    username: Username
    password: Password
}

export interface Username {
    type: string
    title: string
    required: boolean
    "x-decorator": string
    "x-component": string
    "x-component-props": XComponentProps
}

export interface XComponentProps {
    prefix: string
}

export interface Password {
    type: string
    title: string
    required: boolean
    "x-decorator": string
    "x-component": string
    "x-component-props": XComponentProps2
}

export interface XComponentProps2 {
    prefix: string
}