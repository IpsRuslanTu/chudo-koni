interface BodyCell {
  key: number;
  values: string[];
}

export interface PageTableData {
  headerCells: string[];
  bodyCells: BodyCell[];
}
