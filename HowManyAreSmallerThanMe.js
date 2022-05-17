var smaller = (n) => 
  n.map((val, id) => n.slice(id++).filter(x => x < val).length);