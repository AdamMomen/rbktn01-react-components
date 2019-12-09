class GroceryList extends React.Component {
	constructor(props) {
	  super(props);

    this.state = {
      done : false
    };

	}
	hovermuse(){
		this.setState({
			done: !this.state.done
		});
	}
	render() {
		var style = {
			'font-weight': this.state.done ? 'bold' : 'normal',
    };
    
		return (
			<li style = {style}onMouseMove = {this.hovermuse.bind(this)}>{this.props.item}</li>
		);
	}
}

var Cucumbers = (props) => (
	<ul>
		{ props.item.map(one =>
		< GroceryList item={one} />
		)}
	</ul>
);

ReactDOM.render( <Cucumbers item = {['work', 'eat' , 'sleep']} />, document.getElementById('app'));
