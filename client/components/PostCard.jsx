import React from "react";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import format from "date-fns/format";

const PostCard = ({ post }) => {
  const formattedDate = format(new Date(post.createdAt), "MMMM dd, yyyy");
  const imageUrl = post.image || "/placeholder-image.png";

  // Function to strip HTML tags
  const stripHtmlTags = (html) => {
    if (!html) return "";
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  // Get the truncated description without HTML tags
  const truncatedDescription = stripHtmlTags(post.description);

  return (
    <Card className="group overflow-hidden relative" style={{ width: "400px" }}>
      <CardHeader className="p-0">
        <div className="relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          {post.image ? (
            <Image src={imageUrl} alt={post.title} width={500} height={300} />
          ) : (
            <div
              style={{
                width: "500px",
                height: "300px",
                backgroundColor: "#ccc",
              }}
            />
          )}
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {post.category.title}
        </Badge>
        <div className="flex justify-between ">
          <h3 className="font-medium mb1">{formattedDate}</h3>
          <h3 className="font-normal text-gray-800 mb1">{post.user.name}</h3>
        </div>
        <h4 className="h4 mb-1">{post.title}</h4>
        <p className="text-muted-foreground text-lg line-clamp-2">
          {truncatedDescription}
        </p>
        <Link href={`/blogs/${post.slug}`}>
          <Button className="flex items-center justify-center rounded-lg mx-auto my-3">
            Extend Blog
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default PostCard;
