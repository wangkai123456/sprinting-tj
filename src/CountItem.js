import React from 'react';

function CountItem(props){
  let {tag,name,num,changeCount} = props.item;
  
  function clickAdd(){
    changeCount(num+1)
  }
  function clickMin(){
    if(num !== 0)
    changeCount(num-1)
  }

  return (
    <div>
      {tag}  
      <span>商品名：{name}---价格：18---</span>
      <button onClick={clickAdd}>+</button>
      <span>{num}</span>
      <button onClick={clickMin}>-</button>
      小计：{18*num}
    </div>
  );
}

export default CountItem