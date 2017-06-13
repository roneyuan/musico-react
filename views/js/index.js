import React from 'react';
import ReactDOM  from 'react-dom';

import EventList from './components/event-list';

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<EventList />, document.getElementById('app'))
); 