const posts = [
    {title:'Post Title 1' , description: 'Post 1 Description' },
    {title:'Post Title 2' , description: 'Post 2 Description' },
    {title:'Post Title 3' , description: 'Post 3 Description' },
    {title:'Post Title 4' , description: 'Post 4 Description' }
]

const listPosts = (item) => {
    return new Promise((res,rej) => {
        item.map(item => {
            console.log(item)
        })
        res('Eski postlar başarıyla listelendi')
        rej('Bir hata oluştu');
    })
}

const addPosts = (newPost) => {
    return new Promise((res,rej) => {
        posts.push(newPost);
        res(posts)
        rej('Post eklenirken bir hata oluştu');   
    })
}


const addPostAndShow = async () => {
    const firstPosts = await listPosts(posts)
   console.log(firstPosts);
   const newPosts = await addPosts({title:'New Post' , description: 'New Post Description' })
   listPosts(newPosts)
    console.log('Yeni Post Eklendi ');
}

addPostAndShow()