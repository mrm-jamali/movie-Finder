


function Favorites() {

  const listFavarite=()=>{
    
    let favariteMovie=localStorage.getItem("favarite");
  console.log("favariteMovie",favariteMovie)
  console.log("hello")
  }
  return (
    <div>
<button onClick={listFavarite}>
  تست Favorite
</button>
    </div>
  )
}

export default Favorites