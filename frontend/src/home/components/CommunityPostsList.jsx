import { CommunityPostItem } from "./CommunityPostItem"

export const CommunityPostsList = ({ posts }) => {
  
  return (
    <>
    
    <div className="card">
        <div className="card-body">
         {
           posts.map(post => (
            <CommunityPostItem key={post.id} post={post} />

          ))
         }
        </div>
    </div>

    </>
  )
}
