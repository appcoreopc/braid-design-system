import { Tokens } from '../../themes/theme';

export default (tokens: Tokens) => {
  // We currently don't support responsive checkboxes and
  // radio buttons, but nobody actually needs it (so far)
  const scale = tokens.text.standard.mobile.size / 28;
  const rows = Math.round(tokens.touchableRows * scale);

  return rows * tokens.rowHeight;
};
