import { useForm, Form, Input, Select, Edit, useSelect } from "@pankod/refine";
import { ICarrier } from "interfaces";

export const CarrierEdit: React.FC = () => {
    const { formProps, saveButtonProps, queryResult } = useForm<ICarrier>();


    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
            <Form.Item label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                    <Input />
                </Form.Item>
                <Form.Item label="email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item label="City" name="city">
                    <Input />
                </Form.Item>
                <Form.Item label="Country" name="country">
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};