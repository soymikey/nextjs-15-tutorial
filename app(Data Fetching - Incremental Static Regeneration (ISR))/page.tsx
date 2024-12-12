import { revalidateBlogByPath, revalidatePostByTag } from "./action";

export default function Home() {
  return (
    <div>
      <button onClick={revalidateBlogByPath}>revalidateBlogByPath</button>
      <button onClick={revalidatePostByTag}>revalidatePostByTag</button>
    </div>
  );
}
