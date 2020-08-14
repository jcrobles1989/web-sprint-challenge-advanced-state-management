1. What problem does the context API help solve?

It simplifies state management by allowing components to retrieve data from a context object rather than props. With the context API, prop drilling is no longer necessary.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action is an object that contains a type and an optional payload. The type is a string explaining what the action does and the payload is data associated with that action, e.g. an item to be added to an array on state.

The action is then dispatched to the reducer. The reducer is a function that receives the action and returns a new state.

The store is an object where our application state is held. It is known as a "single source of truth" because everything that changes in our application happens in the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the global state of the application, and component state is local state stored within a component. Application state can be used in larger applications that require multiple components to have access to state, and component state could be used in smaller applications.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is an inner function and middleware that allows you to handle async operations inside action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is Redux. I like the predictability of Redux and how it makes it very simple to manage state.
