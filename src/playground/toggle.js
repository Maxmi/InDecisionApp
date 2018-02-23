class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
          <div>
            <p>Here are the details</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Toggle /> , document.getElementById('app'))

// const app = {
//   title: 'Visibility Toggle',
// };
//
// let visibility = false;
//
// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// }
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleVisibility}>
//         {visibility? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Here are your details.</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot)
// }
//
// const appRoot = document.getElementById('app');
// render();
