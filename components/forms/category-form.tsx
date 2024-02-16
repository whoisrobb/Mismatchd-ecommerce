"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import React, { useEffect, useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "../ui/single-dropzone";
import { addCategory } from "@/server-actions/site";


const CategoryForm = () => {
    const [file, setFile] = useState<File>();
    const [title, setTitle] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const { edgestore } = useEdgeStore();

    const handleSubmit = async () => {
        if (!file) return;

        const res = await edgestore.publicFiles.upload({
            file
        });
        setFileUrl(res.url);
    };

    const handleClick = () => {
        if (!fileUrl) return;
        addCategory({title, image: fileUrl});
    };

    useEffect(() => {
        handleSubmit();
    }, [file]);

  return (
    <>
        <Input value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Set category title" />

        <SingleImageDropzone
            width={200}
            height={200}
            value={file}
            onChange={(file) => {
                setFile(file);
            }}
        />

        <Button onClick={handleClick}>Create</Button>
    </>
  )
}

export default CategoryForm