import {
    Create,
    Form,
    Input,
    useForm,
} from "@pankod/refine";

import { IShipper } from "interfaces";

export const ShipperCreate = () => {
    const { formProps, saveButtonProps } = useForm<IShipper>();


    return (
        <Create saveButtonProps={saveButtonProps}>
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
        </Create>
    );
};