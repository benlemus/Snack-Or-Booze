### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  The purpose of React Router is to give easy navigation to your application. It sets up all the routing to be able to easily access different routes.

- What is a single page application?
  A single page application is an application that always uses the same page but shows different things on different renders. It doesn't reload completely new pages.

- What are some differences between client side and server side routing?
  Some differences between Client side and Server side routing is that Client side is in the browser, doesnt reload the full page and gets data usually after render (using useEffect). However Server side is on the server rather than browser, usually means a full page reload and can get data before sending the HTML.

- What are two ways of handling redirects with React Router? When would you use each?
  Two ways of handling redirects are using Navigate component and the useNavigate hook. The hook should be used after an event or astnc operation. The component is to be used inside of JSX.

- What are two different ways to handle page-not-found user experiences using React Router?
  Two different ways to handle page-not-found using React Router is making a catch all at the end of all the routes. Sice React router checks the Routes in order so if nothing matches, it will use the last one, that can handle thte 404. Another way is to use the same catch all but instead of showing a 404 page, you can simply redirect to a homepage or anything else of your choosing.

- How do you grab URL parameters from within a component using React Router?
  You grap URL paramters using React Router by using the Params hook. You import useParams from react and define it (const params = useParams()).

- What is context in React? When would you use it?
  Context in React is a way to pass data to children components without prop drilling. So you dont have to pass the same data through mulitple components without using it. You would use it when you want a component to be able to use data or a function for example that is multiple levels down from where the useState or data is being handled.

- Describe some differences between class-based components and function
  components in React.
  Class based components are an older way to write components, you set the state manually within the class (you dont use useState), you need to use 'render()' and are usually longer. function based components let you use hooks, can be shorter and can use normal JavaScript to return JSX.

- What are some of the problems that hooks were designed to solve?
  Some problems that hooks were designed to solve are deeply nested trees to be able to reuse logic, moved away from class based components for simpler understanding and just made things overall simpler, cleaner and resuable.
