// ** React Imports
import { ReactElement } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import TrendingUp from "mdi-material-ui/TrendingUp";
import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import DotsVertical from "mdi-material-ui/DotsVertical";
import Calendar from "mdi-material-ui/Calendar";
import ShapeOutline from "mdi-material-ui/ShapeOutline";

// ** Types
import { ThemeColor } from "src/@core/layouts/types";

interface DataType {
  stats: string;
  title: string;
  color: ThemeColor;
  icon: ReactElement;
}

const StatisticsCard = (props: any) => {
  const { category, description, transactionDate } = props;

  return (
    <Card>
      <CardHeader
        title="Bank Data Detail"
        action={
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: "text.secondary" }}
          >
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 400, color: "text.primary" }}
            >
              {description}
            </Box>
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(0)} !important` }}>
        <Grid container spacing={[5, 0]}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  backgroundColor: `warning.main`,
                }}
              >
                <ShapeOutline sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">Category</Typography>
                <Typography variant="button">{category}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: "common.white",
                  backgroundColor: `info.main`,
                }}
              >
                <Calendar sx={{ fontSize: "1.75rem" }} />
              </Avatar>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="caption">Transaction Date</Typography>
                <Typography variant="button">{transactionDate}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
