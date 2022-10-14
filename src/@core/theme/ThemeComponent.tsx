// ** React Imports
import { ReactNode } from "react";

// ** Redux Imports
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// ** MUI Imports
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

// ** Type Imports
import { Settings } from "src/@core/context/settingsContext";

// ** Theme Config
import themeConfig from "src/configs/themeConfig";

// ** Theme Override Imports
import overrides from "./overrides";
import typography from "./typography";

// ** Theme
import themeOptions from "./ThemeOptions";

// ** Global Styles
import GlobalStyling from "./globalStyles";

import bankDataReducer from "../../reducers/bank/bankDataSlice";

interface Props {
  settings: Settings;
  children: ReactNode;
}

const store = configureStore({
  reducer: {
    bankData: bankDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const ThemeComponent = (props: Props) => {
  // ** Props
  const { settings, children } = props;

  // ** Merged ThemeOptions of Core and User
  const coreThemeConfig = themeOptions(settings);

  // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
  let theme = createTheme(coreThemeConfig);

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
  });

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <GlobalStyles styles={() => GlobalStyling(theme) as any} />
        {children}
      </Provider>
    </ThemeProvider>
  );
};

export default ThemeComponent;
