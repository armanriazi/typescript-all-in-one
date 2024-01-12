// Example function
function goto(point2D: {x: number, y: number}) {
    // Imagine some code that might break
    // if you pass in an object
    // with more items than desired
  }
  // Some point you get from somewhere
  const point3D = {x: 1, y: 2, z: 3};
  /** A nifty use of rest to remove extra properties */
  const { z, ...point2D } = point3D;
  console.log(z, point2D); 
  goto(point2D);