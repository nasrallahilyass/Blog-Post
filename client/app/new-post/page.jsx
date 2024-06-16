// new-post page
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import useSWR from "swr";
import TextareaWithTiptap from "@/components/TextareaWithTiptap";

import Spinner from "@/components/Spinner";

const fetcher = (url) => fetch(url).then((res) => res.json());

const NewPost = () => {
  const { data: session, status } = useSession();
  const { data: categories, error } = useSWR("http://localhost:5000/api/categories", fetcher);
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    console.log("Session data:", session);
  }, [session]);

  if (status === "loading") return <Spinner />;

  if (status === "unauthenticated") {
    signIn();
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!session || !session.user || !session.user.id) {
      console.error("User session is missing or incomplete");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("categoryId", categoryId);
    formData.append("description", description);
    formData.append("userId", session.user.id);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/posts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Post created:", response.data);
      router.push(`/blogs/${response.data.slug}`); // Navigate to the newly created post
    } catch (error) {
      console.error("Error creating post:", error);
      console.error("Error response data:", error.response?.data);
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!categories) return <Spinner />;

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-3xl mb-6">Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-1.5 mb-6">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            className="w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid w-full items-center gap-1.5 mb-6">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="flex flex-col space-y-1.5 mb-6">
          <Label htmlFor="category">Categories</Label>
          <Select onValueChange={(value) => setCategoryId(value)}>
            <SelectTrigger id="category" className="w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              {categories.map((category, index) => (
                <SelectItem key={index} value={category.id}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <TextareaWithTiptap
          id="content"
          label="Content"
          value={description}
          onChange={setDescription}
          className="w-full"
        />
        <div className="flex justify-between my-6 ">
          <Button variant="outline" type="reset">
            Cancel
          </Button>
          <Button type="submit" className="ml-2">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
