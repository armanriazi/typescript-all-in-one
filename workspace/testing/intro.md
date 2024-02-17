# Testing
Some of the oldest, and therefore most mature, frameworks include Jasmine, QUnit and Mocha.
There have also been attempts to write unit testing frameworks in TypeScript, including MaxUnit or tsUnit, but these frameworks never really took off.
Jest, which was written by the Facebook team and integrates with Babel, TypeScript, Node, React, Angular, and Vue.

- [x] White-box tests are where the internal logic or structure of the code is **known** to the tester.
- [x] Black-box tests, on the other hand, are tests where the internal design or **logic is not known** to the tester.

### Unit tests

A unit test is typically a **white-box test where all of the external interfaces to a block of code are mocked or stubbed out.** If we are testing some code that does an asynchronous call to load a block of JSON, for example, unit testing of this code would require mocking out the returned JSON. This technique ensures that the object under test is always given a known set of data. When new requirements come along, this known set of data can grow and expand, of course. Objects under test should be designed to interact with interfaces so that those interfaces can be easily mocked or stubbed in a unit test scenario.

### Integration tests

Integration tests are another form of **white-box tests that allow the object under test to run in an environment close to how it would look in a real deployment.** In our earlier example, where some code needs to do an asynchronous call to load a block of JSON data, an integration test would need to actually call the **REST services** that generated the JSON. If this REST service relied upon data from a database, then the integration test would need data in the **database** that matched the integration test scenario. If we were to describe a unit test as having a boundary around the object under test, then an integration test is an expansion of this boundary to include **dependent objects or services.**

Building automated integration tests for our applications will improve the quality of our product immensely. Consider the case for the scenario we have been discussing—where a block of code calls a REST service for some JSON data. Someone could easily change the structure of the JSON data that the REST service returns. Our unit tests would still pass, as they are not actually calling the REST service, but our application would be broken because the returned JSON is not what we are expecting.

Without integration tests, these types of errors will only be picked up in the later stages of manual testing, or possibly only in production. The later a failure in our system is identified, the more expensive it is to fix.


### Acceptance tests

Acceptance tests are black-box tests and are generally scenario-based. They may incorporate multiple user screens or user interactions in order to pass. Although these tests are generally carried out by a testing team, they can be automated fairly easily with the wealth of modern testing tools that are readily available. Automating acceptance testing is really the holy grail of the testing tree. Humans can easily make mistakes, and using a testing team to repeatedly run hundreds of **acceptance tests is not always reliable, is expensive, and takes a long time.**

Having a full suite of automated acceptance tests also proves that the application works and that new features have not inadvertently broken older ones.

---

TypeScript can be used with any JavaScript testing framework that you want. In the worst case you can always do a simple `TypeScript -> JavaScript` transform and go your merry way. 

That said, in this section look at options that we have enjoyed greatly 🌹
