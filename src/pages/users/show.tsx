import { Show, useShow, Typography, Tag } from "@pankod/refine";

const { Title, Text } = Typography;

export const UserShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;
    const record = data?.data;



    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Firstname</Title>
            <Text>{record?.first_name}</Text>
            
            <Title level={5}>Lastname</Title>
            <Text>{record?.last_name}</Text>

            <Title level={5}>Phone</Title>
            <Text>
                <Tag>{record?.phone}</Tag>
            </Text>
            <Title level={5}>Email</Title>
            <Text>
                <Tag>{record?.email}</Tag>
            </Text>

        </Show>
    );
};