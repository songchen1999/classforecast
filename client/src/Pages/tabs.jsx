import { Tabs, Table } from 'antd';
import columns from './table';

const dataSource = [
  {
      key: '1',
      CourseNumber: '111',
      CourseName: "idfk",
  },
  {
    key:'2',
    CourseNumber: '121',
    CourseName: 'bleh',
  },
];

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs onChange={callback} type="card">
    <TabPane tab="100" key="1">
      <h1>100 Level Courses</h1>
      <Table columns={columns} dataSource={dataSource} />
    </TabPane>
    <TabPane tab="200" key="2">
      <h1>200 Level Courses</h1>
    </TabPane>
    <TabPane tab="300" key="3">
      <h1>300 Level Courses</h1>
    </TabPane>
    <TabPane tab="400" key="4">
      <h1>400 Level Courses</h1>
    </TabPane>
    <TabPane tab="500+" key="5">
      <h1>500 and Higher Level Courses</h1>
    </TabPane>
  </Tabs>
  
);

export default Demo