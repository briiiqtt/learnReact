import React, { Component } from "react";

class TOC extends Component {
  render() {
    let data = this.props.data;
    let list = [];
    for (let i = 0; i < data.length; i++) {
      list.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title} {data[i].desc}
          </a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default TOC;
