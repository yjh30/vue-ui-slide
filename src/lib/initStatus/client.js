import utils from '../utils/index';

export default function() {
    this.client.width = utils.getPropertySize(this.$el, 'width');

    try {
        if (typeof this.client.width !== 'number') {
            window.console.warn('you should set vm.$el style width in css');
        }
    } catch (e) {
        console.log(e);
    }
}
