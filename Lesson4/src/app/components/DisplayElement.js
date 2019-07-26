import React from 'react';

export default class DisplayElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }

  render() {
    let newsBlock;
    if (this.state.display) {
      newsBlock = <div>
        <h3>Новости</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic maxime perspiciatis cumque, tenetur beatae, quas adipisci id fuga voluptatum omnis, voluptatem at. Iure temporibus et illum molestias nesciunt sed.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic maxime perspiciatis cumque, tenetur beatae, quas adipisci id fuga voluptatum omnis, voluptatem at. Iure temporibus et illum molestias nesciunt sed.</p>
      </div>;
    }

    return (
      <div>
        <h2 className="link" onClick={() => {
          this.setState({ display: !this.state.display })
        }}>Скрыть/показать блок</h2>
        {newsBlock}
      </div>
    );
  }
}