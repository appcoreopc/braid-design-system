import reset from '../../reset/reset.css.js';
import normalizeAtoms from '../../atoms/normalizeAtoms';
import tokens from './tokens';
import { Theme } from '../theme';
import atoms from './atoms.css.js';
import treatTheme from './seekAsiaTheme.treat';

const theme: Theme = {
  treatTheme,
  name: 'seekAsia',
  tokens,
  atoms: normalizeAtoms(reset, atoms),
};

export default theme;
