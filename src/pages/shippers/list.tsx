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

import { IShipper } from "interfaces";

export const ShipperList: React.FC = () => {
    const { tableProps } = useTable<IShipper>();


    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="name" title="name" />
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
                <Table.Column
                    dataIndex="city"
                    title="city"
                    render={(value) => <TextField value={value} />}
                />
                <Table.Column
                    dataIndex="country"
                    title="country"
                    render={(value) => <TextField value={value} />}
                />
                <Table.Column<IShipper>
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