import React from 'react'

const commentData = [
    {
        name:"Shantonu Chowdhury",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        replies:[

        ]
    },
    {
        name:"Shantonu Chowdhury",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        replies:[
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            },
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            },
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            },
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            },
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            },
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            },
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            }
                ]
            }
                ]
            }
        ]
    },
    {
        name:"Shantonu Chowdhury",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        replies:[
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            },
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            },
            {
                name:"Shantonu Chowdhury",
                text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
                replies:[
                    
                ]
            }
        ]
    },
    {
        name:"Shantonu Chowdhury",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        replies:[
            
        ]
    },
    {
        name:"Shantonu Chowdhury",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        replies:[
            
        ]
    }
];

const Comment = ({ data})=>{
    const {name,text,replies} = data;
    return (
        <div className='flex m-2 p-2 shadow-sm bg-gray-100 round-corners-md'>
            <img className='w-8 h-8 rounded-full' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user-icon" />
            <div className='ml-2'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => {
        return (
            <div key={index}>
                <Comment data={comment} />
                <div className='pl-5 border-l-2 ml-5 border-gray-200'>
                    <CommentList comments={comment.replies} />
                </div>
            </div>
        );
    });
}

function CommentContainer() {
  return (
    <div className='p-5 m-2'>
        <h1 className='text-2xl'>Comments</h1>
        <CommentList comments={commentData} />
    </div>
  )
}

export default CommentContainer