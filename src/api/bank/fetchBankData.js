import axios from "axios";
import { fetch, load, throwError } from "src/reducers/bank/bankDataSlice";

const { REACT_APP_API_URL } = process.env;

export const fetchBankData = (offset) => {
  return async function (dispatch) {
    try {
      let link = `https://raw.githubusercontent.com/fazz-interviews/frontend-bank-list/main/bank.json?token=GHSAT0AAAAAABZGMRGS53V7K4JZCIB6HMDAY2L33SA`;

      const res = await axios.get(link, {});

      if (res) {
        dispatch(fetch({ data: res.data.accounts }));
      }
    } catch (error) {
      dispatch(load());
      // dispatch(throwError(error.message));
    }
  };
};
