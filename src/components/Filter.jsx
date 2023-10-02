import React from 'react';

class Filter extends React.Component {
  componentDidMount() {
    console.log('se buscó');
  }

  componentDidUpdate(){
  console.log('se actualizó busqueda')
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <input
        type="text"
        placeholder="Search contacts"
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default Filter;