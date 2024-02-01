"use client"
import React from 'react'
import store from '../_stateStore/store';
import { observer } from 'mobx-react-lite';

function Counter() {
  return (
    <div className='text-center mt-12'>
      <p className='border-b-2 border-primary mb-3'>{store.count}</p>
      <button className='mx-3 border-2 rounded px-6 py-1 border-primary' onClick={store.increaseCount}>++</button>
      <button className='mx-3 border-2 rounded px-6 py-1 border-primary' onClick={store.decreaseCount}>--</button>
    </div>
  )
}

const CounterObserver = observer(Counter);
export default CounterObserver;