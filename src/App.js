import React from 'react';
import './App.css';

import Header from './components/Header';
import Todo from './components/Todo';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';
import Joke from './components/Joke';
import jokesData from './components/jokesData';
import Product from './components/Product';
import vschoolProducts from './components/vschoolProducts';



function App() {

  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchLine} />);
  const productComponents = vschoolProducts.map(products => <Product key={products.id} name={products.name} price={products.price} description={products.description}></Product>)
  return (
    <div className="App">
     <Header />
     <Todo />
     <ContactCard 
        contact={
          {
            name: "Mr. Whiskerson", 
            imgUrl: "http://placekitten.com/300/200", 
            email: "mr.whiskaz@catnap.meow", 
            phone: "(212) 555-1234"
          }
        }

     />
     <ContactCard
        contact={
          {
            name: "Fluffykins", 
            imgUrl: "http://placekitten.com/400/200", 
            email: "fluff@me.com", 
            phone: "(212) 555-2345"
          }
        } 
     />
     <ContactCard
        contact={
          {
            name: "Destroyer", 
            imgUrl: "http://placekitten.com/400/300", 
            email: "ofworlds@yahoo.com", 
            phone: "(212) 555-3456"
          }
        }

     />
     <ContactCard 
        contact={
          {
            name: "Felix", 
            imgUrl: "http://placekitten.com/200/100", 
            email: "thecat@hotmail.com", 
            phone: "(212) 555-4567"
          }
        }
     />
     <div>
       {jokeComponents}
     </div>
     <div>
       <h1>School Products List</h1>
       {productComponents}
     </div>
     <Footer />
    </div>
  );
}

export default App;
