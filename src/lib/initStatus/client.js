import utils from '../utils/index';

export default function() {
  this.client.width = utils.getPropertySize(this.$el, 'width');
  if (this.client.width === 0) {
    this.client.width = utils.getPropertySize(this.$el.parentElement, 'width');
  }

  [].forEach.call(this.elems.content.children, el => {
    el.style.width = `${this.client.width}px`;
  });

  try {
    if (typeof this.client.width !== 'number') {
      window.console.warn('you should set vm.$el style width in css');
    }
  } catch (e) {
    console.log(e);
  }
}
