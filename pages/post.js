// pages/post/[id].js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <h1>Blog Post {id}</h1>
      <p>This is the content of Blog Post {id}.</p>
    </div>
  );
};

export default Post;
