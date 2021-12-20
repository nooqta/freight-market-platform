import { Show, useShow, Typography, Tag } from "@pankod/refine";

const { Title, Text } = Typography;

export const CarrierShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;



    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Name</Title>
            <Text>{record?.name}</Text>

            <Title level={5}>Phone</Title>
            <Text>
                <Tag>{record?.phone}</Tag>
            </Text>
            <Title level={5}>Email</Title>
            <Text>
                <Tag>{record?.email}</Tag>
            </Text>
            <Title level={5}>City</Title>
            <Text>
                <Tag>{record?.city}</Tag>
            </Text>
            <Title level={5}>Country</Title>
            <Text>
                <Tag>{record?.country}</Tag>
            </Text>

        </Show>
    );
};