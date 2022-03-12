import react from 'react';
import { Table, Tag, Space } from 'antd';
const { Column, ColumnGroup } = Table;

const IncidentListComponent = ({
  incidnetList,
}: any) => {
  
  return (
    <Table dataSource={incidnetList} rowKey="id">
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Status" dataIndex="status" key="status" />
        <Column
            title="Date Created"
            dataIndex="created_at"
            key="created_at"
            render={cretaedAt => (
                <span>{cretaedAt}</span>
            )}
        />
        <Column
            title="Details"
            dataIndex="details"
            key="details"
            render={details => (
                <span>{details}</span>
            )}
        />

    </Table>
  );
};

export default IncidentListComponent;

