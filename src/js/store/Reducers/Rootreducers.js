
//  cost:[
//     {id:0, date:'2019/1/1', title:'漢堡', category: '飲食', cost:'105'},
//     {id:1, date:'2019/1/1', title:'珍珠奶茶', category: '飲食', cost:'50'},
//     {id:2, date:'2019/1/1', title:'95機油', category: '交通', cost:'100'},
//     {id:3, date:'2019/1/1', title:'牙刷', category: '生活', cost:'150'},
//     {id:4, date:'2019/1/1', title:'便當', category: '飲食', cost:'80'}
// ]
const initState = {
    costLists: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'SIGNUP':
            console.log('success')
            return state
    }
}

export default rootReducer