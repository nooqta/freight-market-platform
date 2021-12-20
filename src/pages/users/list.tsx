import {
    List,
    TextField,
    TagField,
    Table,
    useTable,
    ShowButton,
    Space,
    EditButton,
    DeleteButton,
} from "@pankod/refine";

import { IUser } from "interfaces";

export const UserList: React.FC = () => {
    const { tableProps } = useTable<IUser>();


    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="first_name" title="Firstname" />
                <Table.Column dataIndex="last_name" title="Lastname" />
                <Table.Column
                    dataIndex="phone"
                    title="phone"
                    render={(value) => <TagField value={value} />}
                />
                <Table.Column
                    dataIndex="email"
                    title="email"
                    render={(value) => <TextField value={value} />}
                />
                <Table.Column<IUser>
                    title="Actions"
                    dataIndex="actions"
                    render={(_text, record): React.ReactNode => {
                        return (
                            <Space>
                                <ShowButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                                <EditButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                                <DeleteButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                            </Space>
                        );
                    }}
                />
            </Table>
        </List>
    );
};