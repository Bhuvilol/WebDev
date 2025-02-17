

import ItemList from './ItemList';

const Content = ({items,handleDelete,handleCheck}) => {
  


  // const [count, setCount] = useState(0)

  // const handleNameChange = () => {
  //       const names = ['Bob','Kevin','Dave']
  //       const int = Math.floor(Math.random() * 3)
  //       setName(names[int]);
  //   }

    // const handleClick = () => {
    //     setCount(count+1)
    //     console.log(count);
        
    // }
    // const handleClick2 = () => {
    //     console.log(count)
    // }
    // const handleClick3 = (e) => {
    //     console.log(e.target.innerText)
    // }
  return (
    
    <main>
      {items.length ? (
        <ItemList 
          items={items} 
          handleDelete={handleDelete} 
          handleCheck={handleCheck}
        />
      ) : (
        <p style={{marginTop: '2rem'}}>Your list is empty</p>
      )}
      
        {/* <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>
          Change Name
        </button>
        <button onClick={handleClick}>
          Click it
        </button>
        <button onClick={handleClick2}>
          Click it
        </button> */}
    </main>
  )
}

export default Content