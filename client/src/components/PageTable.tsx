import React, { FC } from 'react';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { PageTableData } from '../types/PageTableData';

interface PageTableProps {
  data: PageTableData;
  onRowClick: (id: number) => void;
}

const PageTable: FC<PageTableProps> = ({ data, onRowClick }) => {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            {data.headerCells.map((cell, index) => (
              <TableCell key={index}>{cell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.bodyCells.map((bodyCell, idxBodyCell) => (
            <TableRow hover key={idxBodyCell}>
              {bodyCell.values.map((cell) => (
                <TableCell
                  key={`${bodyCell.key}-${cell}`}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => onRowClick(bodyCell.key)}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default PageTable;
