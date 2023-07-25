import React from 'react';

import { useState } from 'react';

export default function Time() {

const [time, setTime]= useState(null);

setInterval(()=>{
const date = new Date();
const fullTime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
setTime(fullTime);


},1000);

  return (
    <div>{time}</div>
  )
}
