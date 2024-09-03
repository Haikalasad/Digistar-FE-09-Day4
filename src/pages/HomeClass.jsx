// import React, { Component } from 'react';

// class HomeClass extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0
//     };
//     console.log('Constructor: Komponen diinisialisasi');
//   }

//   componentDidMount() {
//     console.log('componentDidMount: Komponen dipasang ke DOM');
//     this.interval = setInterval(() => {
//       this.setState({ count: this.state.count + 1 });
//     }, 1000);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate: Komponen diperbarui');
//     if (prevState.count !== this.state.count) {
//       console.log(`Counter diperbarui: ${this.state.count}`);
//     }
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount: Komponen akan dihapus dari DOM');

//     clearInterval(this.interval);
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('shouldComponentUpdate: Apakah perlu diperbarui?');
   
//     return nextState.count < 10;
//   }
//   render() {
//     console.log('Render: Komponen sedang dirender');
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//       </div>
//     );
//   }
// }

// export default HomeClass;
