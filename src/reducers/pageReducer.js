import { IMAGES } from '../constants';
const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case IMAGES.LOAD_IMAGES_SUCCESS:
      return state + 1;
    default:
      return state;
  }
};

export default pageReducer;
