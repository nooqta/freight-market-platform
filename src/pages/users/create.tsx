import {
    Create,
    Form,
    Input,
    useForm,
} from "@pankod/refine";

import { IUser } from "interfaces";

export const UserCreate = () => {
    const { formProps, saveButtonProps } = useForm<IUser>();


    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
            <Form.Item label="Firstame" name="first_name">
                    <Input />
                </Form.Item>
            <Form.Item label="Lastname" name="last_name">
                    <Input />
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                    <Input />
                </Form.Item>
                <Form.Item label="email" name="email">
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};