import {Controller, useFormContext} from "react-hook-form";
import {InputProps as InputPropsAntd} from "antd";
import {StyledInput} from "./styles";

interface InputProps extends InputPropsAntd {
    label: string;
    message?: string;
}

const InputForm = ({label, message, ...props}: InputProps) => {
    const {register, control, getValues, formState: {errors}} = useFormContext();
    let errorMessage: any = message || (errors && props.name ? errors[props.name]?.message : '')

    return (
        <>
            {label &&
                <label>{label}{props.required ? <sup className="text-red-600 text-xs mt-1">*</sup> : ''}</label>}
            <Controller name={`${props.name}`} control={control}
                        render={({field: {value, onChange, ...field}}) => (
                            <StyledInput {...field} {...register(`${props.name}`)} name={props.name}
                                         value={getValues(`${props.name}`)}
                                         error={errorMessage}
                                         onChange={(e: { target: { value: string } }) => onChange(e.target.value)}
                                         placeholder="Enter name..."/>)}/>
            {errorMessage ? <p className="text-red-600 font-bold">{errorMessage}</p> : ''}
        </>
    );
}

export default InputForm;