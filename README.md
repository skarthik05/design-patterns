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

