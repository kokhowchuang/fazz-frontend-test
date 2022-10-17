// ** React Imports
import { forwardRef, useEffect, useState } from "react";

// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

// ** Custom Components Imports
import CardStatisticsVerticalComponent from "src/@core/components/card-statistics/card-stats-vertical";
import StatisticsCard from "src/views/dashboard/StatisticsCard";

// ** Icon Imports
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";

// ** Third Party Imports
import DatePicker from "react-datepicker";
import { useRouter, withRouter } from "next/router";

import { get, selectedBankData } from "src/reducers/bank/bankDataSlice";
import { useAppDispatch, useAppSelector } from "src/@core/hooks/hooks";

const CustomInput = forwardRef((props, ref) => {
  return (
    <TextField
      fullWidth
      {...props}
      inputRef={ref}
      label="Payment Due Date"
      autoComplete="off"
    />
  );
});

const FormLayoutsSeparator = () => {
  // ** States
  const [date, setDate] = useState<Date | null | undefined>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const bankData = useAppSelector<any>(selectedBankData);

  useEffect(() => {
    dispatch(get(router.asPath.split("/")[2]));
  }, [router.asPath]);

  console.log(bankData);

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // Handle Select
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setState(event.target.value);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async () => {
    const payload = {
      firstName,
      lastName,
      email,
      address,
      city,
      postcode,
      state,
    };
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    const response = await fetch("http://localhost:3000/customers/", request);

    if (response.status === 201) {
      setOpen(true);
      clearInputValues();
    }
  };

  const clearInputValues = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setCity("");
    setPostcode("");
    setState("");
  };

  const displayCredit = (amount: number | null) => {
    if (!amount) {
      return "$0.00";
    } else {
      return "$" + bankData?.credit;
    }
  };

  const displayDebit = (amount: number | null) => {
    if (!amount) {
      return "$0.00";
    } else {
      return "$" + bankData?.debit;
    }
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={6}>
          <StatisticsCard
            description={bankData?.description}
            category={bankData?.category}
            transactionDate={bankData?.transactionDate}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={displayCredit(bankData?.credit)}
                icon={<CurrencyUsd />}
                color="success"
                title="Credit Amount"
                subtitle="Weekly Profit"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats={displayDebit(bankData?.debit)}
                title="Debit Amount"
                color="secondary"
                subtitle="Past Month"
                icon={<CurrencyUsd />}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(FormLayoutsSeparator);
