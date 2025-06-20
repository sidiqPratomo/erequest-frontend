import { FC, PropsWithChildren } from 'react';
import { HeaderProps } from 'react-table';
import { useListView } from '../../core/ListViewProvider';

interface Props {
  tableProps: PropsWithChildren<HeaderProps<any>>;
}

const SelectionHeader: FC<Props> = ({ tableProps }) => {
  const { isAllSelected, onSelectAll } = useListView();
  return (
    <th {...tableProps.column.getHeaderProps()} className='w-10px pe-2'>
      <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
        <input
          className='form-check-input'
          type='checkbox'
          data-kt-check={isAllSelected}
          data-kt-check-target='#kt_table_users .form-check-input'
          checked={isAllSelected}
          style={{ cursor: 'pointer' }}
          onChange={onSelectAll}
        />
      </div>
    </th>
  );
};

export { SelectionHeader };
