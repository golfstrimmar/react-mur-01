import React from "react";
import { connect } from "react-redux";


const Likes = (props) => {
console.log(props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>🖤{props.likes}</button>
      <button>Dislike</button>
    </div>
  );
};



function mapStateToProps(state){
  console.log('mapStateToProps' , state);
return{
  likes: state.likes
}
}


function mapDispatchToProps(dispatch){
return {
  onIncrementLikes: () => {
    console.log('click');
    const action = {type: 'INCREMENT'};
    dispatch(action);
  }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
