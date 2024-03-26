import { useState } from 'react';
import data from './data';

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        { data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={index}>
              <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

              <div className="content">{dataItem.answer}</div>

            </div>
          ))
        ) : null(
          <div><h1>No Data Available!!</h1></div>,
        )}
      </div>
    </div>
  );
}
