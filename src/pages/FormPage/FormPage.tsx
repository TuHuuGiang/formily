import {FormProvider, useForm} from "react-hook-form";
import {InputForm} from "../../components/InputForm";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';

const FormPage = () => {
    const schema = yupResolver(yup.object().shape({
        name: yup.string().required('Test validate')
    }));
    const form = useForm({
        resolver: schema
    });

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit(onSubmit)
            }}>
                <InputForm name="name" label="User name" required/>
                <button style={{background: 'blue', color: '#fff', padding: '4px 10px', marginTop: '4px'}}
                        onClick={() => form.handleSubmit(onSubmit)()}>Save
                </button>
            </form>
        </FormProvider>
    );
}

export default FormPage;