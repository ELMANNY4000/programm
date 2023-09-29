import React from 'react'
import Card from './components/card/Card'

const App = () => {

  const img1 = "https://images.pexels.com/photos/8382689/pexels-photo-8382689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const img2 = "https://images.pexels.com/photos/13780425/pexels-photo-13780425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const img3 = "https://images.pexels.com/photos/11772521/pexels-photo-11772521.jpeg?auto=compress&cs=tinysrgb&w=600"
  const img4 = "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const img5 = "https://images.pexels.com/photos/10914594/pexels-photo-10914594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const img6 = "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const img7 = "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
  const img8 = "https://images.pexels.com/photos/13791390/pexels-photo-13791390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const img9 = "https://images.pexels.com/photos/2204634/pexels-photo-2204634.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const img10 = "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600"

  const styleObj = {
    display: "flex",
    flexWrap: "wrap",
  }

  return (
    <div style={styleObj}>
      <Card image={img2} price="$500.000" title="samsung s20"/>
      <Card image={img3} price="$100.000" title="samsung s20"/>
      <Card image={img4} price="$11.000" title="samsung s20"/>
      <Card image={img5} price="$55.000" title="samsung s20"/>
      <Card mage={img6}  price="$10.000" title="samsung s20"/>
      <Card mage={img7}  price="$67.000" title="samsung s20"/>
      <Card mage={img8}  price="$77.000" title="samsung s20"/>
      <Card mage={img9}  price="$17.000" title="samsung s20"/>
      <Card mage={img10}  price="$55.000" title="samsung s20"/>
      <Card mage={img1}  price="$10.000" title="samsung s20"/>
    </div>
  )
}

export default App