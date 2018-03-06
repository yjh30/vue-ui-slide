import utils from './utils/index';
import initStatus from './initStatus';
import initElemsStyle from './initElemsStyle';

export default function() {
    initStatus.call(this);
    initElemsStyle.call(this);
}
