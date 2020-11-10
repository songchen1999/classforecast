import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Course Number',
    dataIndex: 'CourseNumber',
    key: 'CourseNumber',
    render: text=> <a>{text}</a>
  },
  {
    title: 'Course Name',
    dataIndex: 'CourseName',
    key: 'CourseName',
  },
];


export default columns