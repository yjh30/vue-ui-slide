const vendors = ['webkit', 'moz', 'ms', 'o'];

export default function(property) {
    const el = document.createElement('div');
    if (property in el.style) return property;

    for (let i = 0, len = vendors.length; i < len; i++) {
        var p = vendors[i] + property[0].toUpperCase() + property.substring(1);
        if (p in el.style) break;
    }

    if (!p) {
        throw new Error(`your browser not support the css property: ${property}`);
        return;
    }

    return p;
}
