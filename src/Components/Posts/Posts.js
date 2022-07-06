export default function Posts ({innerPost}) {
  return(
      <div>
          {
              innerPost.map(value=> <h5>{value.body}</h5>)
          }
      </div>
  )
};