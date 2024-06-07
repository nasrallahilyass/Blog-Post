"use client";
import React, { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import { FaImages, FaUpload } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/Button";

const NewPost = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="container mx-auto px-4 py-6">
      <input
        type="text"
        placeholder="Title"
        className="input-title mb-4 p-3 w-full rounded border text-lg focus:ring-primary focus:border-primary"
      />

      <div className="flex items-center gap-2 mb-4">
        <Button
          className="btn-icon bg-primary-foreground text-primary rounded-full hover:bg-primary hover:text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          <GoPlusCircle size={20} />
        </Button>
        {open && (
          <div className="flex">
            <Button className="btn-icon bg-secondary text-secondary-foreground rounded-full hover:bg-secondary-foreground hover:text-secondary">
              <FaImages size={20} />
            </Button>
            <Button className="btn-icon bg-secondary text-secondary-foreground rounded-full hover:bg-secondary-foreground hover:text-secondary ml-2">
              <FaUpload size={20} />
            </Button>
          </div>
        )}
      </div>

      <ReactQuill
        theme='snow'
        value={value}
        onChange={setValue}
        // modules={modules}
        placeholder='Tell us your story'
        className='quill-editor bg-card text-card-foreground p-3 rounded shadow'
      />
      <Button className="my-5">
        Post
      </Button>
    </div>
  );
};

export default NewPost;
