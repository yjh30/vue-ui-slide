import initElements from './elements';
import initClient from './client';
import initSlide from './slide';

export default function() {
  initElements.call(this);
  initClient.call(this);
  initSlide.call(this);
}
