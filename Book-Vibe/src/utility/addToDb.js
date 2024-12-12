
const getStoredReadList=()=>{

    const storedListStr=localStorage.getItem('read-list');
    if(storedListStr){
        const storedListStr=JSON.parse(storedListStr);

        return storedListStr;
    }
    else{
        return [];
    }
}
const addToStoredReadList=(id)=>{

    const storedList=getStoredReadList()
    if(storedList.includes(id)){
        console.log(id, 'Already exists in the read list')
    }
    else{
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListStr);
    }
}

const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}
const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        // already exists. do not add it
        console.log(id, 'already exists in the read list')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

export {addToStoredReadList,addToStoredWishList,getStoredReadList}