import { Column } from 'react-table';
import { SelectionHeader } from './SelectionHeader';
import { SelectionCell } from './SelectionCell';
import { CustomHeaderFieldTranslation } from './CustomHeaderFieldTranslation';
import { ColumnString } from '../../../../components/table/column/ColumnString';
import { Collection } from '../../core/_models';

const baseHeaderColumns: ReadonlyArray<Column<any>> = [
  {
    Header: (props) => <SelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => (
      <SelectionCell id={props.data[props.row.index].id} />
    ),
  },
  {
    Header: (props) => (
      <CustomHeaderFieldTranslation
        collection={Collection}
        tableProps={props}
        name='name'
        className='min-w-125px'
      />
    ),
    id: 'name',
    Cell: ({ ...props }) => {
      const entry = props.data[props.row.index];
      return <ColumnString value={entry['user'].name} />;
    },
  },
  {
    Header: (props) => (
      <CustomHeaderFieldTranslation
        collection={Collection}
        tableProps={props}
        name='departments'
        className='min-w-125px'
      />
    ),
    id: 'departments',
    Cell: ({ ...props }) => {
      const entry = props.data[props.row.index];
      return <ColumnString value={entry['departments']} />;
    },
  },
  {
    Header: (props) => (
      <CustomHeaderFieldTranslation
        collection={Collection}
        tableProps={props}
        name='position'
        className='min-w-125px'
      />
    ),
    id: 'position',
    Cell: ({ ...props }) => {
      const entry = props.data[props.row.index];
      return <ColumnString value={entry['position']} />;
    },
  },
];

export { baseHeaderColumns };
