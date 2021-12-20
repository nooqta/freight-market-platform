import { useForm, Form, Input, Edit } from "@pankod/refine";
import { IShipper } from "interfaces";

export const ShipperEdit: React.FC = () => {
    const { formProps, saveButtonProps } = useForm<IShipper>();


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