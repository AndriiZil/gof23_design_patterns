'use strict';

class Sum {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  pattern() {
    return this.left.pattern() + this.right.pattern();
  }
}

class Min {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  pattern() {
    return this.left.pattern() - this.right.pattern();
  }
}

class Num {
  constructor(val) {
    this.val = val;
  }

  pattern() {
    return this.val;
  }
}
