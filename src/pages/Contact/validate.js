import _ from 'lodash';

export default ({ name, email, comment }) => {
  const errors = {};

  if (!name && name.length < 1) {
    errors.name = 'Invalid name!'
  }

  if (!email && email.length < 1) {
    errors.email = 'Invalid email!'
  }

  if (!comment && comment.length < 1) {
    errors.comment = 'Invalid comment!'
  }

  return {
    isValid: _.isEmpty(errors),
    errors
  }
};
