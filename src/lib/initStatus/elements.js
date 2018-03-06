export default function() {
  this.elems.el = this.$el;
  this.elems.content = this.$el.children[0];

  const childs = this.elems.content.children;

  this.elems.firstChild = childs[0];
  this.elems.lastChild = childs[childs.length - 1];
}
