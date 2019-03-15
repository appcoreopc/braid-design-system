import React, { Component } from 'react';
import { TreatProvider } from 'treat';
import ThemeContext from '../private/ThemeContext';
import { Theme } from '../../themes/theme';

export interface ThemeProviderProps {
  theme: Theme;
}

export default class ThemeProvider extends Component<ThemeProviderProps> {
  render() {
    const { theme, ...restProps } = this.props;

    return (
      <TreatProvider theme={theme.treatTheme}>
        <ThemeContext.Provider value={theme} {...restProps} />
      </TreatProvider>
    );
  }
}
