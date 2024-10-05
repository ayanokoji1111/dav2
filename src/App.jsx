import './App.css'
import Card from './components1/Card/Card'
import Header from './components1/Header/Header'
import Text from './components1/Text/Text'
import Button from './components1/Button/Btn'

function App() {

  return (
    <div>
      <Header  />
      <Card name={'ProductCard'}
       price={'#####'}
        quantity={'No Quantity '}
        desc={' Desc'}
        />

        <Text text={'product page'} 
              fontSize={'32px'} 
              textColor={'red'} 
              textAlign={'center'}  />

         <Button
         text={'Button'} 
         bgColor={'black'} 
         width={'100px'} 
         height={'40px'}  />
    </div>
  )
}

export default App