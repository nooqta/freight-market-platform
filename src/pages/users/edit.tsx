import { useForm, Form, Input, Edit } from "@pankod/refine";
import { IUser } from "interfaces";

export const UserEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IUser>();


    return (
        <Edit saveButtonProps={saveButtonProps}>
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
        </Edit>
    );
};