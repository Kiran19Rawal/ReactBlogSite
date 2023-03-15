import "./post.css"

export default function Post() {
  return (
    <div className="post">
     <img
      className="postImg"
      src="https://images.pexels.com/photos/14641908/pexels-photo-14641908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
       accusantium doloremque laudantium, totam rem aperiam, eaque ips
       a quae ab illo inventore veritatis et quasi architecto beatae vitae
       dicta sunt explicabo.
       aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
       qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
       dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
       non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
       quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
       ullam corporis suscipit.
      </p>
    </div>
  )
}
