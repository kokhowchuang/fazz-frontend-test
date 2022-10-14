import React, { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";

// ** MUI Imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import { selectBankData } from "src/reducers/bank/bankDataSlice";
import { fetchBankData } from "src/api/bank/fetchBankData";
import { useAppSelector, useAppDispatch } from "src/@core/hooks/hooks";
import { Button, TablePagination, TableSortLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";

type IBankData = {
  id: string;
  transactionDate: string;
  category: string;
  description: string;
};

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  grow: {
    flexGrow: 1,
  },
  deleteButton: {
    marginLeft: theme.spacing(1),
  },
  spacer: {
    flexGrow: "1",
  },
}));

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "id",
    width: 300,
  },
  {
    id: "transactionDate",
    numeric: false,
    disablePadding: false,
    label: "Transaction Date",
    width: 300,
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Category",
    width: 300,
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
    width: 900,
  },
  { id: "action", numeric: false, disablePadding: false, label: "Action" },
];

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: any, orderBy: any) {
  return order === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: any, comparator: any) {
  let stabilizedThis = [];

  for (let index = 0; index < array.length; index++) {
    if (typeof array[index]["id"] !== "undefined") {
      stabilizedThis.push([array[index], index]);
    } else {
      stabilizedThis.push([{}, index]);
    }
  }
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props: any) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width ? headCell.width : undefined}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const TableBasic = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const rows = useAppSelector(selectBankData);

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    if (rows.length === 0) {
      dispatch(fetchBankData());
    }
  }, [dispatch, rows]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            rowCount={rows.length}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: IBankData, index: number) => {
                return (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:last-of-type td, &:last-of-type th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.transactionDate}</TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="right">
                      <Button size="small" variant="contained">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableBasic;