import{List,Card, ListItem} from '@material-tailwind/react'
function NewArrivals({filterProducts}) {
  return (
    <>

    <main>
        <div className='flex justify-center  mt-10'>
            
                <List className='flex flex-row flex-wrap justify-center  gap-10 text-black  font-[]'>
                <ListItem  selected  onClick={()=>filterProducts('ALL')} className=" w-fit bg-gray-400">ALL</ListItem>
                    <ListItem onClick={()=>filterProducts('NEW ARRIVALS')}    className=" w-fit">NEW ARRIVALS</ListItem>
                    <ListItem onClick={()=>filterProducts('SPECIALS')} className=" w-fit">SPECIALS</ListItem>
                    <ListItem onClick={()=>filterProducts('BEST SELLER')} className=" w-fit">BEST SELLER</ListItem>
                    <ListItem onClick={()=>filterProducts('MOST VIEWED')} className=" w-fit">MOST VIEWED</ListItem>
                    <ListItem onClick={()=>filterProducts('FEATURED')} className=" w-fit">FEATURED</ListItem>
                </List>
            
        </div>
    </main>

    </>
  )
}

export default NewArrivals