(function () {
  return{
      'add': ([xa,xb],[ya,yb])=>[xa+xb,ya+yb],
      'multiply': ([xa,ya],scalar)=>[xa*scalar,ya*scalar],
      'length': ([xa,ya])=>Math.sqrt(xa*xa+ya*ya),
      'dot': ([xa,ya],[xb,yb])=>xa*xb+ya*yb,
      'cross': ([xa,ya],[xb,yb])=>xa*yb-xb*ya
  }
}());
