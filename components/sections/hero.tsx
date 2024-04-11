import React from 'react'

const Hero = () => {
  return (
    <section>
        <GridLines/>
    </section>
  )
}

export default Hero


const GridLines = ()=>(<div className="grid grid-cols-5 grid-rows-5 gap-4  ">
<div className="col-span-3 row-span-3">1</div>
<div className="col-span-2 row-span-3 col-start-4">2</div>
<div className="col-span-3 row-span-2 row-start-4">3</div>
<div className="col-span-2 row-span-2 col-start-4 row-start-4">4</div>
</div>)