import { useState } from 'react'
import CountItem from './CountItem'

import './App.css';

function App() {
  const [ dataList,setDataList ] = useState([
    { tag: false,name: '羊肉串',num: 0 },
    { tag: false,name: '腰子',num: 0 },
    { tag: false,name: '韭菜',num: 0 }
  ]);

  return (
    <div>
      {
        dataList.map((item,index)=>{
          return <CountItem
            item={item}
            changeCount={(code)=>setDataList(code)}
          />
        })
      }
    </div>
  );
}

export default App;
