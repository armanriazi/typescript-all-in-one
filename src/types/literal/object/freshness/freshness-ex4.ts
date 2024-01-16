/// `>tags:` #Important #Interface
// Assuming
interface State {
    foo?: string;
    bar?: string;
}

/*
// You want to do: 
this.setState({foo: "Hello"}); // Yay works fine!

// Because of freshness it's protected against typos as well!
this.setState({foos: "Hello"}); // Error: Objects may only specify known properties

// And still type checked
this.setState({foo: 123}); // Error: Cannot assign number to a string
*/
