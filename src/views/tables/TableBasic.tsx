import React, { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

// ** MUI Imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableContainer from "@mui/material/TableContainer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";

import {
  selectFilteredBankData,
  filterData,
  filterDate,
} from "src/reducers/bank/bankDataSlice";
import { fetchBankData } from "src/api/bank/fetchBankData";
import { useAppSelector, useAppDispatch } from "src/@core/hooks/hooks";

import { DefaultTheme, makeStyles } from "@mui/styles";
import { Dayjs } from "dayjs";
import { Theme } from "@mui/material/styles";

type IBankData = {
  id: string;
  transactionDate: string;
  category: string;
  description: string;
  credit: number;
  debit: number;
};

const useStyles = makeStyles((theme: Theme) => ({
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
  viewButton: {
    color: "#FFFFFF !important",
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

function descendingComparator(
  a: IBankData,
  b: IBankData,
  orderBy: keyof IBankData
) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: string, orderBy: keyof IBankData) {
  return order === "desc"
    ? (a: IBankData, b: IBankData) => descendingComparator(a, b, orderBy)
    : (a: IBankData, b: IBankData) => -descendingComparator(a, b, orderBy);
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
  const { classes, order, orderBy, onRequestSort } = props;
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
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const TableBasic = () => {
  // ** Hooks
  const router = useRouter();
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const rows = useAppSelector(selectFilteredBankData);

  // ** States
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [order, setOrder] = React.useState<string>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof IBankData>("id");
  const [value, setValue] = React.useState<DateRange<Dayjs>>([null, null]);

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
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "" }}>
      <Box sx={{ mb: 4, px: 4 }}>
        <Grid container spacing={0} justifyContent="flex-end">
          <Grid xs={7}>
            <TextField
              id="search-bar"
              className="text"
              onInput={(e) => {
                dispatch(filterData((e.target as HTMLTextAreaElement).value));
              }}
              label="Search"
              variant="outlined"
              placeholder="Keyword"
              size="small"
            />
          </Grid>
          <Grid xs={5}>
            <Box display="flex" justifyContent="flex-end">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={{ start: "Start Date", end: "End Date" }}
              >
                <DateRangePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                    dispatch(
                      filterDate({
                        startDate: newValue[0]?.toISOString(),
                        endDate: newValue[1]?.toISOString(),
                      })
                    );
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField
                        {...startProps}
                        size="small"
                        autoComplete="off"
                      />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField
                        {...endProps}
                        size="small"
                        autoComplete="off"
                      />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
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
                      <Button
                        className={classes.viewButton}
                        onClick={() =>
                          router.push(router.pathname + "/" + row.id)
                        }
                        size="small"
                        variant="contained"
                      >
                        Details
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
