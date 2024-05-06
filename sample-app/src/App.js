import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion />
      {/* Random color component */}
      <RandomColor />
      {/* Star rating component */}
      <StarRating noOfStars={7} />

      {/* Image Slider */}
      <ImageSlider url="https://picsum.photos/v2/list" page="1" limit="10" />

      {/* Load More Data */}
      <LoadMoreData />
    </div>
  );
}

export default App;
