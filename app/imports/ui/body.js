/**
 * Created by clark on 2/27/17.
 * Body js file.
 */
import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});
