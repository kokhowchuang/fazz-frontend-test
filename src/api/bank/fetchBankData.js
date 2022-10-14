import axios from "axios";
import { fetch, throwError } from "src/reducers/bank/bankDataSlice";

export const fetchBankData = (offset) => {
  return async function (dispatch) {
    try {
      let link = `https://raw.githubusercontent.com/fazz-interviews/frontend-bank-list/main/bank.json?token=GHSAT0AAAAAABZGMRGSZ6HT6XQDELQJDYUWY2I6UEQ`;

      const res = await axios.get(link, {});
      dispatch(fetch({ data: res.data.accounts }));
    } catch (error) {
      // dispatch(throwError(error.message));
    }
  };
};
