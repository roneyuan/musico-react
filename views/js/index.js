import React from 'react';
import ReactDOM  from 'react-dom';

import Person from './components/person';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Person />, document.getElementById('app'))
); 