// The hook is divided in two main parts, the executable function and an array of dependencies. If the array is empty, like in the following example, the function gets executed each time the component is rendered.

useEffect(() => {
  console.log("The component has rendered");
}, []);
// If we declare any variables within the dependency array, the function will execute only when those variables change.

useEffect(() => {
  console.log("var1 has changed");
}, [var1]);
