# design-patterns

## Creational Design Patterns
Creational patterns consist of different mechanisms used to create objects.

### Singleton Pattern
Singleton is a design pattern that ensures that a class has only one immutable instance. Said simply, the singleton pattern consists of an object that can't be copied or modified.

### Factory Method Pattern
The Factory method pattern provides an interface for creating objects that can be modified after creation. The cool thing about this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code.

### Abstract Factory Pattern
The Abstract Factory pattern allows us to produce families of related objects without specifying concrete classes. It's useful in situations where we need to create objects that share only some properties and methods.

The way it works is by presenting an abstract factory the client interacts with. That abstract factory calls the corresponding concrete factory given the corresponding logic. And that concrete factory is the one that returns the end object.

### Builder Pattern
The Builder pattern is used to create objects in "steps". Normally we will have functions or methods that add certain properties or methods to our object.

The cool thing about this pattern is that we separate the creation of properties and methods into different entities.

This is related to object composition, a topic I've talked about here.

## Structural Design Patterns
Structural patterns refer to how to assemble objects and classes into larger structures.

### Adapter Pattern
The Adapter allows two objects with incompatible interfaces to interact with each other.

Let's say, for example, that your application consults an API that returns XML and sends that information to another API to process that information. But the processing API expects JSON. You can't send the information as it's received since both interfaces are incompatible. You need to adapt it first. 😉

### Decorator Pattern
The Decorator pattern lets you attach new behaviors to objects by placing them inside wrapper objects that contain the behaviors. If you're somewhat familiar with React and higher order components (HOC) this kind of approach probably rings a bell for you.

Technically, components in React functions, not objects. But if we think about how React Context or Memo we can see that we're passing a component as a child to this HOC, and thanks to that this child component is able to access certain features.

### Facade Pattern
The Facade pattern provides a simplified interface to a library, a framework, or any other complex set of classes.

Well...we can probably come out with lots of examples for this, right? I mean, React itself or any of the gazillion libraries out there used for pretty much anything related to software development. Specially when we think about declarative programming, it's all about providing abstractions that hide away complexity from the eyes of the developer.

A simple example could be JavaScript's map, sort, reduce and filter functions, which all work like good 'ol for loops beneath the hood.

### Proxy Pattern
The Proxy pattern provides a substitute or placeholder for another object. The idea is to control access to the original object, performing some kind of action before or after the request gets to the actual original object.

Again, if you're familiar with ExpressJS this probably rings a bell for you. Express is a framework used to develop NodeJS APIs, and one of the features it has is the use of Middlewares. Middlewares are nothing more than pieces of code we can make execute before, in the middle, or after any request reaches our endpoints.