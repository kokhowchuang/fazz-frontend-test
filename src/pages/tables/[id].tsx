// ** React Imports
import { forwardRef, useEffect } from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";
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

type IBankData = {
  id: number;
  description: string;
  transactionDate: string;
  category: string;
  credit: number | null;
  debit: number | null;
};

const FormLayoutsSeparator = () => {
  // ** Hooks
  const router = useRouter();
  const dispatch = useAppDispatch();
  const bankData = useAppSelector<IBankData>(selectedBankData);

  useEffect(() => {
    dispatch(get(router.asPath.split("/")[2]));
  }, [router.asPath]);

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
